import { memo } from "react";
import { NumberType, StringType } from "@/lib/definitions";

const ColoredCircle = memo(function({
    h,
    w,
    bgColor
}: {
    h?:NumberType;
    w?:NumberType;
    bgColor:StringType;
}) {
    return (
        <div className={`h-${h??12} w-${w??12} rounded-full bg-${bgColor}`}/>
    )
});

export default ColoredCircle;