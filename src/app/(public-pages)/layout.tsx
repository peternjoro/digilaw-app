import FrontendHeader from "@/components/nav/FrontendHeader";

//* layout to be shared by all public pages including index page
//* NB: if you put <html> and/or <body> tags in this layout, Next.js will complain about hydration error

export default function layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative">
            {/** Shared Header section */}
            <section className="w-full fixed top-0 z-50">
                <FrontendHeader/>
            </section>
            {/** Main body section */}
            <div className="w-full z-40 mt-20">
                {children}
            </div>
        </div>
    )
}