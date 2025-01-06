'use client';

import { memo, useActionState, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/Button";
import { IconAtSign, IconCircleArrowRight, IconKeyRound, IconUserCircle } from "../icons";
import PhoneNumberInput from "@/components/input-fields/PhoneNumberInput";
import { CreateAccountState, createUserAccount } from "@/lib/server-actions";
import FormErrors from "@/lib/errors/form-errors";
import ErrorMessage from "@/components/form-errors/ErrorMessage";


const cur_state = {
    show_email_phone: false,
    show_conf_pwd:false
}

//*use memo to memoize the component - i.e only re-render the component when its own props change but not it's parent

//* NB: useActionState() that returns some tructured data might show you errors here when no implementation is done in the server-action
//* NB: useActionState() returns a default 'isPending' value indicating the action is processing

const SignupForm = memo(function SignupForm() {
    const [curState, setCurState] = useState(cur_state);
    const initialState: CreateAccountState = { message: null, errors: {} };
    const [formState, formAction, isPending] = useActionState(createUserAccount, initialState);

    const onFocusOut = (elm:string, inputValue:string) => {
        console.log(`Element:${elm}, value:${inputValue}`);
    }
    //fire 300ms after user stops typing, other than on every keystroke
    const updateUI = useDebouncedCallback((elm:string, inputValue:string) => {
        //console.log(`Element:${elm}, value:${inputValue}`);
        let key: ('show_email_phone'|'show_conf_pwd'|null) = null;
        let keyVal = false;
        if(elm == "fullNames"){
            key = 'show_email_phone';
            keyVal = inputValue.length > 0;
        }
        else if(elm == "password"){
            key = 'show_conf_pwd';
            keyVal = inputValue.length > 0;
        }

        if(key){
            const state = curState[`${key}`];
            if(state !== keyVal){
                setCurState({...curState, [key]: keyVal});
            }
        }
    }, 300);

    //console.log(`isPending:${isPending}`);
    //console.log(formState.errors);

    const nameError = FormErrors.findError("fullNames",formState.errors);
    const emailError = FormErrors.findError("email",formState.errors);
    const phoneError = FormErrors.findError("phone_number",formState.errors);
    const passwordError = FormErrors.findError("password",formState.errors);
    const confPasswordError = FormErrors.findError("confPassword",formState.errors);

    console.log(`SignupForm re-rendered`);


    return (
        <form action={formAction} className="text-sm space-y-5">
            <div className="">
                <label htmlFor="full-names" className="block mb-1 font-medium">
                    Full Names
                </label>
                <div className="relative">
                    <div className="relative">
                        <input
                            id="full-names"
                            name="fullNames"
                            type="text"
                            placeholder=""
                            className="peer inputField border-myColor1 outline-none text-sm"
                            required
                            onChange={(e) => updateUI(e.target.name,e.target.value)}
                            />
                        <IconUserCircle className="iconInputFieldStart text-gray-500"/>
                    </div>
                </div>
                <ErrorMessage message={nameError}/>
            </div>
            <div className={curState.show_email_phone ? `flex flex-col` : `hidden`}>
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email Address
                </label>
                <div className="relative">
                    <div className="relative">
                        {/**  onBlur={(e) => onFocusOut(e.target.name,e.target.value)} */}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=""
                            className="peer inputField border-myColor1 outline-none text-sm"
                            required
                            />
                        <IconAtSign className="iconInputFieldStart text-gray-500"/>
                    </div>
                </div>
                <ErrorMessage message={emailError}/>
            </div>
            <div className={curState.show_email_phone ? `flex flex-col` : `hidden`}>
                <label htmlFor="phone_number" className="block mb-1 font-medium">
                    Phone number
                </label>
                <div className="relative">
                    <div className="w-full">
                        <PhoneNumberInput/>
                    </div>
                </div>
                <ErrorMessage message={phoneError}/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                    Password
                </label>
                <div className="relative">
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder=""
                            className="peer inputField border-myColor1 outline-none text-sm"
                            required
                            onChange={(e) => updateUI(e.target.name,e.target.value)}
                            />
                        <IconKeyRound className="iconInputFieldStart text-gray-500"/>
                    </div>
                </div>
                <ErrorMessage message={passwordError}/>
            </div>
            <div className={curState.show_conf_pwd ? `flex flex-col` : `hidden`}>
                <label htmlFor="conf-password" className="block mb-1 font-medium">
                    Confirm Password
                </label>
                <div className="relative">
                    <div className="relative">
                        <input
                            id="conf-password"
                            name="confPassword"
                            type="password"
                            placeholder=""
                            className="peer inputField border-myColor1 outline-none text-sm"
                            required
                            />
                        <IconKeyRound className="iconInputFieldStart text-gray-500"/>
                    </div>
                </div>
                <ErrorMessage message={confPasswordError}/>
            </div>
            {/* if form errors are encountered */}
            {formState.message &&(
                <div className="mb-4">
                    <p className="mt-2 text-sm text-red-500">
                        {formState.message}
                    </p>
                </div>
            )}
            <div className={(curState.show_email_phone && curState.show_conf_pwd) ? `pt-5` : `pt-10`}>
                <Button className="flex w-full bg-black bg-opacity-70 rounded-lg px-5 text-gray-50 py-3" disabled={false}>
                    Create Account <IconCircleArrowRight className="ml-auto" size={20}/>
                </Button>
            </div>
        </form>
    )
});

export default SignupForm;