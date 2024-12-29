'use client';

import Image from "next/image";
import Link from "next/link";
import SignupWithGoogle from "@/components/frontend/SignupWithGoogle";
import HorzDividerWithText from "@/components/HorzDividerWithText";
import { Button } from "@/components/Button";


export default function SignupPage() {

    const onCreateAccount = () => {
        console.log('Create your account');
    }

    return (
        <main className="flex flex-col w-full h-screen items-center md:items-start justify-center">
            <Link href="/">
                <Image alt="Logo" src="/images/logo.png" width={120} height={120} style={{ width:"auto", height:"auto" }}/>
            </Link>
            <div className="flex flex-col mt-10 w-full">
                <div className="flex flex-col ml-0 md:ml-4">
                    <p className="mb-10">Transforming Legal Processes for the Future</p>

                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex flex-col space-y-6">
                            <SignupWithGoogle/>
                            <HorzDividerWithText/>
                            <Button className="outline outline-1 rounded-full py-2 hover:bg-colorOrange hover:text-white" onClick={onCreateAccount}>
                                Create your account
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-20 space-y-5">
                        <div className="flex space-x-1 text-[13px]">
                            <span>By creating an account you agree to our</span>
                            <Link href="/" className="underline underline-offset-2 hover:text-sky-500">Terms of Service</Link>
                            <span>and</span>
                            <Link href="/" className="underline underline-offset-2 hover:text-sky-500">Privacy Policy</Link>
                        </div>
                        <span className="flex space-x-2 text-sm">
                            <span>Already have an account?</span>
                            <Link href="/" className="text-sky-500 hover:underline hover:underline-offset-2">Sign In</Link>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}