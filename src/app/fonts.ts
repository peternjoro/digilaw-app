import { Inter, Lusitana } from "next/font/google";

//*keep all the fonts that will be used throughout the app here and import where required

//*this is a variable font
export const inter = Inter({ subsets: ['latin']});

//*this is not a variable font
export const lusitana = Lusitana({
    weight: ['400', '700'],
    //style: ['normal','bold'],
    subsets: ['latin']
});