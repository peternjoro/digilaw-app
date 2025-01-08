import UserHeader from "@/components/header/UserHeader";

//* layout to be shared by all protected pages
//* NB: if you put <html> and/or <body> tags in this layout, Next.js will complain about hydration error

export default function layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative">
            {/** Shared Header section */}
            <section className="w-full fixed top-0 z-40">
                <UserHeader/>
            </section>
            {/** Main body section */}
            <div className="w-full z-30 mt-24">
                {children}
            </div>
        </div>
    )
}