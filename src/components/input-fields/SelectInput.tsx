

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode
}

export function SelectInput({ children, className, ...rest }: SelectProps) {
    return (
        <select {...rest} className={className}>
            {children}
        </select>
    )
}