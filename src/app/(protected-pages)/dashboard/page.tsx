import { Metadata } from "next";
import DashboardTitlebar from "@/components/protected-pages/DashboardTitlebar";
import BusinessOverview from "@/app/_ui/dashboard/business-overview";
import UpcomingTodo from "@/app/_ui/dashboard/upcoming-todo";
import QuickActions from "@/app/_ui/dashboard/quick-actions";
import Notifications from "@/app/_ui/dashboard/notifications";


export const metadata:Metadata = {
    title: 'Dashboard'
}

export default function DashboardPage() {
    //  border-0 md:border-r border-gray-300

    return (
        <main className="flex flex-col mx-5 md:mx-12 py-5 bg-white">
            <DashboardTitlebar/>
            <section id="business-overview" className="flex flex-col md:flex-row mt-10 mb-5 md:justify-between space-x-0 md:space-x-10 space-y-5 md:space-y-0 md:border-b-2 pb-3">
                <div className="flex-1">
                    <BusinessOverview/>
                </div>
                <div className="flex w-full md:w-1/3">
                    <UpcomingTodo/>
                </div>
            </section>
            <section
                id="main-area"
                className="flex flex-col md:flex-row md:justify-between space-x-0 md:space-x-10 space-y-5 md:space-y-0 py-0 md:py-5 mb-10"
                >
                    <div className="flex flex-1">
                        <QuickActions />
                    </div>
                    <div className="flex w-full md:w-1/3">
                        <Notifications />
                    </div>
            </section>
        </main>
    )
}