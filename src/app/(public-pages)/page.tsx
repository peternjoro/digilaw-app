import HorizontalLine from "@/components/HorizontalLine";
import { IconFileSearch, IconUploadFile, IconUsersRound } from "../_ui/icons";
import FrontendFooter from "../_ui/frontend/footer";

export default function IndexPage() {
    return (
        <main className="w-full">
            <section id="here-section" className="container mx-auto py-10">
                <div className="flex w-full md:space-x-5">
                    <div className="flex flex-col w-full md:w-1/2 text-center md:text-left md:justify-center px-10 py-20 md:px-0 md:pr-20 space-y-5">
                        <div className="flex flex-col w-full md:max-w-md space-y-5">
                            <h1 className="text-5xl text-colorGreen">Join forces Effortlessly</h1>
                            <HorizontalLine lineColor="border-gray-200"/>
                            <p className="text-2xl text-gray-600">Streamlining Legal Workflows for Tomorrow</p>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-1 py-1">
                        <picture className="">
                            <img alt="Demo" src="/images/illustration-1.png"/>
                        </picture>
                    </div>
                </div>
            </section>
            <section id="services-section" className="bg-black py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row text-white space-y-10 md:space-y-0 space-x-0 md:space-x-10">
                        <div className="flex flex-1 flex-col space-y-8">
                            <div className="flex w-full md:px-28 justify-center md:justify-normal">
                                <IconUploadFile size={32}/>
                            </div>
                            <div className="flex w-full md:border-r">
                                <div className="flex flex-col w-full space-y-5 px-20 md:px-16 text-center md:text-left">
                                    <h1 className="text-lg">Upload & Share</h1>
                                    <p className="text-sm text-gray-300">Clients easily upload requested documents directly to their lawyer's portal.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col space-y-8">
                            <div className="flex w-full md:px-28 justify-center md:justify-normal">
                                <IconUsersRound size={32}/>
                            </div>
                            <div className="flex w-full md:border-r">
                                <div className="flex flex-col w-full space-y-5 px-20 md:px-16 text-center md:text-left">
                                    <h1 className="text-lg">Edit & Collaborate</h1>
                                    <p className="text-sm text-gray-300">Lawyers review, edit, and securely share updates or requests with clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col space-y-8">
                            <div className="flex w-full md:px-28 justify-center md:justify-normal">
                                <IconFileSearch size={32}/>
                            </div>
                            <div className="flex w-full">
                                <div className="flex flex-col w-full space-y-5 px-20 md:px-16 text-center md:text-left">
                                    <h1 className="text-lg">Review & Download</h1>
                                    <p className="text-sm text-gray-300">Clients access the final documents, download, and billing in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="info-section" className="py-14">
                <div className="container mx-auto">
                    <div className="flex w-full md:space-x-10">
                        <div className="hidden md:flex md:flex-1">
                            <picture className="shadow-md">
                                <img alt="Demo" src="/images/streamline.png" className="rounded-2xl"/>
                            </picture>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left md:justify-center px-5 md:px-20 space-y-5">
                            <div className="flex flex-col w-full md:max-w-md space-y-5">
                                <h1 className="text-3xl text-colorGreen">Streamline Your Legal Workflow</h1>
                                <HorizontalLine lineColor="border-gray-200"/>
                                <p className="text-xl text-gray-600">
                                    Our Portal is designed to simplify, secure, and streamline document management between you and your clients, ensuring swift 
                                    collaboration and confidentiality at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <FrontendFooter/>
            </footer>
        </main>
    )
}