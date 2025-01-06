'use server';

import { redirect } from "next/navigation";
import { z } from "zod";


//* https://zod.dev

//https://articles.wesionary.team/regular-expression-reg-ex-9c1a0f381f6f - learn about Regex

// server Actions - https://www.codingzeal.com/post/how-to-use-zod-for-form-validation-with-react-server-actions-in-next-js


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

//*Validate data & add friendly error messages
const CreateAccountSchema = z.object({
    fullNames: z.string({
        required_error: 'Full names is required',
        invalid_type_error: 'Name must be a string'
    }).regex(new RegExp(/^[a-zA-z]+\w+[-' ]/), ''),
    email: z.string({
        required_error: 'Email address is required',
    }).email({ message: 'Invalid email'}),
    phone_number:z.string({
        required_error: 'Phone number is required',
        invalid_type_error: 'Invalid phone number'
    }).min(9, {message: 'Invalid phone number'}),
    password: z.string().min(6, {message: 'Password must be 6+ characters'}),
    confPassword: z.string()
});

export async function createUserAccount(prevState:CreateAccountState, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries()); //returns a key-value object
    //console.log(`[rawFormData]=>`,rawFormData);

    //* safeParse() will return an object containing either a success or error field. This will help handle validation more gracefully without 
    //* having to put this logic inside the try/catch block
    const validatedFields = CreateAccountSchema.safeParse({
        fullNames: formData.get('fullNames'),
        email: formData.get('email'),
        phone_number: formData.get('phone_number'),
        password: formData.get('password'),
        confPassword: formData.get('confPassword')
    });
    //console.log(validatedFields);
    //console.log(validatedFields.error);
    //*If form validation fails, return errors early. Otherwise, continue
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'You have errors in the above fields.'
        }
    }
    console.log(validatedFields.data);

    //*call CreateUserAPI endpoint
    try {
        
    }
    catch (error:any) {
        console.log(`[createUserAccount] =>`,error);
        return {
            errors: {},
            message: `CreateUserAPI error: ${error.message}`
        }
    }

    //*NB: if you are not redirecting after processing above, you must return some state, otherwise the client form will complain with errors
    return prevState;
    //redirect('/signup');
}