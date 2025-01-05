import { Metadata } from "next";
import SignupUI from "@/app/_ui/guest/signup";


export const metadata:Metadata = {
    title: 'Signup'
}

export default function SignupPage() {

    return (
        <main className="flex flex-col w-full h-screen items-center md:items-start justify-center">
            <SignupUI />
        </main>
    )
}