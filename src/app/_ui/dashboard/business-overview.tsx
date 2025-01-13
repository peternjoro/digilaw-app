import { memo } from "react";
import PaidViewStat from "@/components/payment-stats/PaidViewStat";
import PaymentDueViewStat from "@/components/payment-stats/DueViewStat";
import { SelectInput } from "@/components/input-fields/SelectInput";
import StaticData from "@/lib/data";


const FilterCriteria = StaticData.business_overview_filter;

const BusinessOverview = memo(function BusinessOverview() {
    return (
        <div className="flex flex-col w-full p-5 shadow-sm bg-gray-100 rounded-md">
            <h1>Business Overview</h1>
            <div className="flex flex-col-reverse md:flex-row justify-between py-5">
                <div className="flex flex-1 space-x-5">
                    <div className="flex w-fit">
                        <PaidViewStat/>
                    </div>
                    <div className="flex w-fit">
                        <PaymentDueViewStat/>
                    </div>
                    <div className="flex flex-1"></div>
                </div>
                <div className="flex w-fit mr-0 md:mr-5 mb-5 md:mb-0">
                    <SelectInput
                        id="filter-overview-stats"
                        name="filterOverviewStats"
                        className="h-10 rounded-md outline-1 outline-black text-sm focus:outline-none focus:border-0"
                        defaultValue="Today"
                        >
                        <>
                            <option value="" disabled>Filter Overview</option>
                            {FilterCriteria.map((filter,index) => {
                                const key = filter.replace(/ /g,"_");
                                return <option value={filter} key={index+key}>{filter}</option>
                            })}
                            <option value="custom-filter">Custom Dates</option>
                        </>
                    </SelectInput>
                </div>
            </div>
        </div>
    )
});

export default BusinessOverview;