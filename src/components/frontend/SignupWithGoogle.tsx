import { ButtonProps } from "../Button";
import GoogleIcon from "../svg/GoogleIcon";

export default function SignupWithGoogle({ children, ...rest }: ButtonProps) {
    return (
        <button {...rest} className="flex bg-black text-white py-3 items-center justify-center rounded-full hover:bg-opacity-70 space-x-3">
            <GoogleIcon width={20} height={20}/>
            <span className="font-medium">{children}</span>
        </button>
    )
}