import { Metadata } from "next";
import SignupPageClient from "./page.client";

export const metadata:Metadata = {
    title: 'Signup'
}

//*NB: A next.js page cannot use hooks, a client component cannot set metadata

export default function SignupPage() {

    return <SignupPageClient/>
}