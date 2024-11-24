import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../Button";

//*Header for the Frondend pages
/**
 * NB: when using <Image/ - dont set priority to true to allow lazy loading
 * placeholder is what to use while the image is loading. Possible values are blur, empty, or data:image/.... Defaults to empty
 * when using placeholder="blur" you must set blurDataURL - a small Data URL to represent the image
 */

/** when setting image width & height, add style with auto for both - to remove Next Image warning */

export default function FrontendHeader() {
    return (
        <div className="flex flex-col w-full bg-white">
            <div className="container mx-auto">
                <div className="flex w-full py-6 justify-between">
                    <Link href={'/'}>
                        <Image alt="Logo" src="/images/logo.png" width={120} height={120} style={{ width:"auto", height:"auto" }}/>
                    </Link>
                    <div className="flex space-x-5">
                        <ButtonLink href="/login" text="Login" className="rounded-md px-3 py-1 bg-colorOrange outline-colorOrange"/>
                        <ButtonLink href="/signup" text="Sign up" className="rounded-md px-3 py-1 text-colorOrange outline-colorGrey"/>
                    </div>
                </div>
            </div>
            <div className="w-full border border-colorOrange"/>
        </div>
    )
}