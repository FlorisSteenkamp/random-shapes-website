/* eslint-disable */

// Just for debugging - so we don't always have to import inspect temporarily
declare global {
    var inspect: <T>(t: T, key?: string) => T;
}
if (typeof window !== 'undefined') {
    window.inspect = (t, key?) => { if (key === undefined) { console.log(t); } else { console.log(key+':',t) } return t; };
}


const dummy = 1;

export { dummy }