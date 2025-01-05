'use server';

import { redirect } from "next/navigation";

//*All guest & common server actions in the app
//*each server action will automatically receive the native FormData object, containing the captured data from the form

//*initial state to be used by useActionState() hook in Sign up form for data vaidation
export type CreateAccountState = {
    errors?: {
        fullNames?: string[];
        email?: string[];
        phone_number?: string[];
        password?: string[];
        confPassword?: string[];
    };
    message?: string | null;
}

export async function createUserAccount(prevState: CreateAccountState, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries()); //returns a key-value object
    console.log(`[rawFormData]=>`,rawFormData);

    //*do data validation, return any errors

    //*call CreateUserAPI endpoint


    //redirect('/signup');

    return prevState;
    /*return {
        errors: {},
        message: 'Connection could not be established'
    }*/
}