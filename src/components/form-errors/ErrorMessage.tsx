export default function ErrorMessage({
    message,
    classNames
}: {
    message:string|null;
    classNames?: string;
    }) {
        if(message) {
            const customCls = classNames ? classNames : `mt-1 text-[13px]`;
            return (
                <div className={`text-red-500 font-medium ${customCls}`}>
                    {message}
                </div>
            )
        }

        return null;
}