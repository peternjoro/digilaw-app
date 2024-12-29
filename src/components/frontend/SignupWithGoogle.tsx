import GoogleIcon from "../svg/GoogleIcon";

export default function SignupWithGoogle() {
    return (
        <button className="flex bg-black text-white py-3 items-center justify-center rounded-full hover:bg-opacity-70 space-x-3">
            <GoogleIcon width={20} height={20}/>
            <span className="font-medium">Sign up with Google</span>
        </button>
    )
}