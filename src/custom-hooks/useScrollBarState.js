import { useEffect, useState } from "react";

//*Not working
export const useScrollBarState = (ref) => {
    const [vertScrollVisible, setVertScrollVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, clientHeight, scrollTop } = ref.current;
            console.log(`scrollHeight:${scrollHeight}`);
            console.log(`clientHeight:${clientHeight}`);
            console.log(`scrollTop:${scrollTop}`);
            //setVertScrollVisible(scrollHeight > clientHeight + scrollTop);
            setVertScrollVisible(scrollHeight > clientHeight);
        };

        if(ref.current !== null){
            ref.current.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if(ref.current !== null){
                ref.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [ref]);

    return vertScrollVisible;
}

