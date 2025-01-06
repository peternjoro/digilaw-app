'use client';

import { useEffect, useRef, useState } from "react";
import { useViewPortState } from "@/custom-hooks/useViewPortState";
import SignupUI from "@/app/_ui/guest/signup";

//*this page must be a client component
export default function SignupPageClient() {
    const elmRef = useRef(null);
    const viewPortState = useViewPortState();
    const [hvalOnSm, setHvalOnSm] = useState('h-screen');


    console.log('---------------');
    console.log(viewPortState);

    useEffect(() => {
        //check viewport size (width) - by default, width of mobile in tailwind is 640px
        let hval = `h-screen`;
        const curVP = viewPortState[1] ;
        if(viewPortState[0] <= 767 && curVP > 0) {
            hval = `h-full`;
        }
        setHvalOnSm(hval);

    },[viewPortState]);


    //NB: use flex-grow instead of - w-full h-screen
    //* for small screens, when a vert scrollbar appears, use h-full, else use h-screen, otherwise the expected design flops
    //* Expected behaviour not yet achieved for sm
    
    return (
        <main ref={elmRef} style={{ overflowY: 'auto' }} className={`flex flex-col ${hvalOnSm} md:h-full flex-grow items-center md:items-start justify-center`}>
            <SignupUI/>
        </main>
    )
}