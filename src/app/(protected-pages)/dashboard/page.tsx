import { Metadata } from "next";
import DashboardTitlebar from "@/components/protected-pages/DashboardTitlebar";
import BusinessOverview from "@/app/_ui/dashboard/business-overview";
import UpcomingTodo from "@/app/_ui/dashboard/upcoming-todo";


export const metadata:Metadata = {
    title: 'Dashboard'
}

export default function DashboardPage() {
    //  border-0 md:border-r border-gray-300
    return (
        <main className="flex flex-col mx-5 md:mx-12 py-5 bg-white">
            <DashboardTitlebar/>
            <section id="business-overview" className="flex flex-col md:flex-row mt-10 mb-5 md:justify-between space-x-0 md:space-x-10 space-y-5 md:space-y-0">
                <div className="flex-1">
                    <BusinessOverview/>
                </div>
                <div className="flex w-full md:w-1/3">
                    <UpcomingTodo/>
                </div>
            </section>
        </main>
    )
}