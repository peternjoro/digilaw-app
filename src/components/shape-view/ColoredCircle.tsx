import { NumberType, StringType } from "@/lib/definitions";
import { classNames } from "@/lib/utils";

const ColoredCircle = ({
    h,
    w,
    bgColor
}: {
    h?:NumberType;
    w?:NumberType;
    bgColor:StringType;
}) => {
    const ht = h ? h : 12;
    const wd = w ? w : 12;

    const classes = `h-${ht} w-${wd} bg-${bgColor}`;

    return (
        <div className={classNames(classes,`rounded-full`)}/>
    )
}

export default ColoredCircle;