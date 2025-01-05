export default function HorizontalLine({ lineColor }: { lineColor:string; }) {
    return <div className={`w-full border ${lineColor}`}/>
}