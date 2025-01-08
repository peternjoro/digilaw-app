import { memo } from "react";
import { IconCircleCheck } from "../icons";

//*this component should fetch the upcoming todos rather than receive them

const UpcomingTodo = memo(function UpcomingTodo() {
    return (
        <div className="flex flex-col w-full shadow-sm bg-gray-100 rounded-md">
            <div className="flex space-x-2 font-semibold items-center p-5">
                <h1 className="">Todo</h1>
                <span>-</span>
                <span className="text-[13px]">{'1st March 2024'}</span>
            </div>
            <div className="flex flex-col bg-white rounded-t-2xl flex-grow border-b-gray-300 mb-1 ml-1 mr-1">
                <div className="flex flex-col px-5 pt-3">
                    {/** item */}
                    <div className="flex space-x-2 items-center">
                        <div className="flex w-5">
                            <IconCircleCheck color="gray" strokeWidth={1}/>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-xs">List item 1</p>
                        </div>
                    </div>
                    {/** separator */}
                    <div className="flex space-x-2 mt-1 mb-1">
                        <div className="flex w-5"/>
                        <div className="flex flex-1">
                            <hr className="w-full"/>
                        </div>
                    </div>
                    {/** item */}
                    <div className="flex space-x-2 items-center">
                        <div className="flex w-5">
                            <IconCircleCheck color="gray" strokeWidth={1}/>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-xs">List item 2</p>
                        </div>
                    </div>
                    {/** separator */}
                    <div className="flex space-x-2 mt-1 mb-1">
                        <div className="flex w-5"/>
                        <div className="flex flex-1">
                            <hr className="w-full"/>
                        </div>
                    </div>
                    {/** item */}
                    <div className="flex space-x-2 items-center">
                        <div className="flex w-5">
                            <IconCircleCheck color="gray" strokeWidth={1}/>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-xs">List item 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default UpcomingTodo;