import { FileSearchIcon, LucideProps, UploadIcon, UsersRoundIcon } from "lucide-react";


//*With this, you can change the props of Lucid Icons optionally as desired
//color, size, fill, strokeWidth, absoluteStrokeWidth etc

export function IconUploadFile({...rest }: LucideProps) {
    return <UploadIcon {...rest}/>;
}

export function IconUsersRound({...rest }: LucideProps) {
    return <UsersRoundIcon {...rest}/>;
}

export function IconFileSearch({...rest }: LucideProps) {
    return <FileSearchIcon {...rest}/>;
}