//* layout to be shared by all (guest) pages
//* NB: if you put <html> and/or <body> tags in this layout, Next.js will complain about hydration error

export default function layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative">
            <div className="flex w-full md:space-x-10">
                <div className="hidden md:flex md:flex-1">
                    <picture className="">
                        <img alt="Shift from physical documents" src="/images/shift-docs_light_2.png" className="h-screen bg-cover rounded-tr rounded-br"/>
                    </picture>
                </div>
                <div className="flex flex-col w-full md:w-1/2 px-10 md:px-0">
                    {children}
                </div>
            </div>
        </div>
    )
}