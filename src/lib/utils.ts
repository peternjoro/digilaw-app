//* Utility functions across the entire application


//*join multiple class names for css
export function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ');
}

//*check that an object is not empty
export function objectNotEmpty(obj :Object) {
    return Object.keys(obj).length > 0; 
    //return JSON.stringify(obj) !== '{}'; // works but might be slower than above for large obj
}