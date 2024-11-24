
//*join multiple class names for css
export function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ');
}