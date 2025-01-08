import { memo } from "react";

//*memo - only reload this component when its state changes

const DashboardTitlebar = memo(function DashboardTitlebar() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex space-x-1 font-semibold text-sm">
                <span>Welcome,</span>
                <span>User Name</span>
            </div>
            <div></div>
        </div>
    )
});

export default DashboardTitlebar;