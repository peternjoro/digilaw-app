import { memo } from "react";

const Notifications = memo(function Notifications() {
    return (
        <div className="flex flex-col w-full shadow-sm bg-whiteSnow rounded-md">
            <div className="flex justify-between p-5 items-center">
                <h1>Notifications</h1>
                <div className=""></div>
            </div>
            <hr/>
            <div className="flex flex-col p-5">
                <h1>Notofication 1</h1>
                <h1>Notofication 2</h1>
                <h1>Notofication 3</h1>
            </div>
        </div>
    )
});

export default Notifications;