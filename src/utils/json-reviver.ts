
/**
 * JSON reviver that takes care of `Map` and `Date`
 */
function jsonReviver(key: string, value: any) {
    if (value === null) { return null; }

    if (typeof value === 'object') {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
        if (value.dataType === 'Date') {
            return new Date(value.value)
        }
        if (value.dataType === 'undefined') {
            return undefined;
        }
    }

    return value;
}


export { jsonReviver }
