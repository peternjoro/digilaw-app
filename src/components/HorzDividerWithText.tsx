export default function HorzDividerWithText({
    text = "or"
}: {
    text?:string;
}) {
    return (
        <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="px-3">{text}</span>
            <hr className="flex-grow border-t border-gray-300"/>
        </div>
    )
}