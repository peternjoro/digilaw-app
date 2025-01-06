import { useEffect, useState } from "react";


export const useViewPortState = () => {
    const [vertScrollPosition,setVertScrollPosition] = useState(0);
    const [viewWidth,setViewWidth] = useState(0);

    useEffect(() => {
        const updateVertPosition = () => {
            setVertScrollPosition(parseInt(window.scrollY));
        }
        window.addEventListener('scroll',updateVertPosition);
        const updateViewSize = () => {
            setViewWidth(parseInt(innerWidth));
        }
        window.addEventListener('resize',updateViewSize);

        updateVertPosition();
        updateViewSize();

        return () => {
            window.removeEventListener('scroll',updateVertPosition);
            window.removeEventListener('resize',updateViewSize);
        }
    },[]);

    return [viewWidth,vertScrollPosition]
}