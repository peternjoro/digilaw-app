import {
    AtSign,
    ChevronDown,
    ChevronLeft,
    CircleArrowRight,
    CircleCheck,
    FileSearchIcon,
    KeyRound,
    LucideProps,
    Pencil,
    Search,
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

export function IconSearch({...rest}: LucideProps) {
    return <Search {...rest}/>
}

export function IconChevronDown({...rest}: LucideProps) {
    return <ChevronDown {...rest}/>
}

export function IconPencil({...rest}: LucideProps) {
    return <Pencil {...rest}/>
}

export function IconCircleCheck({...rest}: LucideProps) {
    return <CircleCheck {...rest}/>
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