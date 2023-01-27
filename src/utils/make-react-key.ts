
let counter = 0;
const keys: WeakMap<any, number> = new Map();


function getKey(o: object): number {
    const k = keys.get(o);
    if (k !== undefined) {
        return k;
    }

    keys.set(o,++counter);

    return counter;
}


export { getKey }
