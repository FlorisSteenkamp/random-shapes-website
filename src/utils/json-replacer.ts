
/**
 * JSON replacer that takes care of `Map` and `Date`
 */
function jsonReplacer(key: string, value: any) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()),
        };
    }

    if (value instanceof Date) {
        return {
            dataType: 'Date',
            value: new Date().getTime()
        }
    }

    return value;
}


export { jsonReplacer }
