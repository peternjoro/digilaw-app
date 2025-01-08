import { memo } from "react";
import { StringType, NumberType } from "@/lib/definitions";
import ColoredCircle from "../shape-view/ColoredCircle";

//*only reload this component when its state or arguments changes
//*controll the width of this component from the parent source

const PaidViewStat = memo(function PaidViewStat({
    amount,
    customStyles
}: {
    amount?: NumberType;
    customStyles?: StringType;
}) {
    const amountVal = amount ? Math.round(amount * 100) / 100 : 0.00;

    return (
        <div className={`flex w-full items-center justify-center space-x-5 rounded-md ${customStyles??`bg-white p-5`}`}>
            {/** should use green color or its variants */}
            <ColoredCircle bgColor="green-400"/>
            <div className="flex flex-col text-[13px] font-semibold text-gray-400 space-y-0.5">
                <span>Paid</span>
                <span>KES {amountVal}</span>
            </div>
        </div>
    )
});

export default PaidViewStat;