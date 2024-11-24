import Link from "next/link";
import { classNames } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}

export function ButtonLink({
    text,
    href,
    className
}: {
    text:string;
    href:string;
    className?:string;
}) {
    if(!href) return null;

    return (
        <Link href={href} className={classNames(' outline outline-1',className??'')}>{text}</Link>
    )
}