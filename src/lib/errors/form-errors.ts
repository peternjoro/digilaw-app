//import { z } from "zod"; 
import { objectNotEmpty } from "../utils";

//* Utility functions related to form errors

//With Zod
//const FindErrorType = z.record(z.string(), z.array(z.string()));
//export type FindErrorType = z.infer<typeof FindErrorType>;

//With Pure Ts
export type FindErrorType = {
    [key: string]: string[]
}
//*above is similar to this 
//export type ErrorType = Record<string, string[]>;

export default class FormErrors
{
    //*return the first error found
    //static findError = ({ fieldName, errors }: { fieldName:string, errors: FindErrorType }) => {
    static findError = (fieldName:string, errors?:FindErrorType) => {
        if(fieldName && errors){
            //if errors array is empty, return null
            if(!objectNotEmpty(errors)) return null;

            if(errors.hasOwnProperty(fieldName)){
                return errors[fieldName][0];
            }
        }

        return null;
    }
}