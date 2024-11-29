import Dayjs from "@/lib/Dayjs";

//*Footer for the Frondend pages

export default function FrontendFooter() {
    return (
        <div className="flex w-full bg-white py-14 border-t border-t-gray-200">
            <div className="flex items-center justify-center space-x-5 w-full">
                <span>&#169; <span className="text-sm">{Dayjs().year()}</span></span>
                <span className="text-sm text-opacity-60">{`LexConnect. All Rights Reserved.`}</span>
            </div>
        </div>
    )
}