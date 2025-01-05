'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/lib/utils";
import { Button } from "@/components/Button";
import SignupWithGoogle from "@/components/frontend/SignupWithGoogle";
import HorzDividerWithText from "@/components/HorzDividerWithText";
import { IconLeftArrow } from "../icons";
import SignupForm from "../forms/signup-form";

const signupState = {
    signupType: '',
}

export default function SignupUI() {
    const [curState, setCurState] = useState(signupState);

    const onsignupWithGoogle = () => {
        setCurState({...curState, signupType:'signup-with-google'});
    }

    const onCreateAccount = () => {
        setCurState({...curState, signupType:'create-account'});
    }

    const renderVariableUI = () => {
        if(curState.signupType == "create-account") {
            return (
                <SignupForm/>
            )
        }

        return (
            <div className="flex flex-col space-y-6">
                <SignupWithGoogle onClick={onsignupWithGoogle}>Sign up with Google</SignupWithGoogle>
                <HorzDividerWithText/>
                <Button className="outline outline-1 rounded-full py-2 hover:bg-colorOrange hover:text-white" onClick={onCreateAccount}>
                    Create your account
                </Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex space-x-1">
                <button className={classNames(curState.signupType == 'create-account' ? `flex`:`hidden`,
                    `rounded-full bg-white h-8 w-8 outline outline-1 outline-slate-300 justify-center items-center`)}
                    onClick={() => setCurState({...curState, signupType:''})}>
                    <IconLeftArrow size={20}/>
                </button>
                <Link href='/'>
                    <Image alt="Logo" src="/images/logo.png" width={120} height={120} style={{ width:"auto", height:"auto" }}/>
                </Link>
            </div>
            <div className="flex flex-col mt-10">
                <div className="flex flex-col ml-0 md:ml-4">
                    <p className={curState.signupType == 'create-account' ? `mb-8` : `mb-12`}>Transforming Legal Processes for the Future</p>

                    <div className="flex flex-col w-full md:w-1/2">
                        {renderVariableUI()}
                    </div>

                    <div className={classNames(`flex flex-col space-y-5`,curState.signupType == 'create-account' ? `mt-14`:`mt-20`)}>
                        <div className="space-x-1 text-[13px]">
                            <span>By creating an account you agree to our</span>
                            <Link href="/" className="clickableText">Terms of Service</Link>
                            <span>and</span>
                            <Link href="/" className="clickableText">Privacy Policy</Link>
                        </div>
                        <span className="flex space-x-2 text-sm">
                            <span>Already have an account?</span>
                            <Link href="/" className="text-myColor1 hover:underline underline-offset-2">Sign In</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}