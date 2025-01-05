import {
    AtSign,
    ChevronLeft,
    CircleArrowRight,
    FileSearchIcon,
    KeyRound,
    LucideProps,
    UploadIcon,
    UserCircle,
    UsersRoundIcon
} from "lucide-react";


//*With this, you can change the props of Lucid Icons optionally as desired
//color, size, fill, strokeWidth, absoluteStrokeWidth etc

export function IconLeftArrow({...rest}: LucideProps) {
    return <ChevronLeft {...rest}/>
}

export function IconUserCircle({...rest}: LucideProps) {
    return <UserCircle {...rest}/>
}

export function IconAtSign({...rest}: LucideProps) {
    return <AtSign {...rest}/>
}

export function IconKeyRound({...rest}: LucideProps) {
    return <KeyRound {...rest}/>
}

export function IconCircleArrowRight({...rest}: LucideProps) {
    return <CircleArrowRight {...rest}/>
}

export function IconUploadFile({...rest }: LucideProps) {
    return <UploadIcon {...rest}/>;
}

export function IconUsersRound({...rest }: LucideProps) {
    return <UsersRoundIcon {...rest}/>;
}

export function IconFileSearch({...rest }: LucideProps) {
    return <FileSearchIcon {...rest}/>;
}