
// TODO - remove in future - used for testing
function areEqual<T>(
        loggingEnabled: boolean) {

    return (prevProps: T,
            nextProps: T) => {

        for (const key in prevProps) {
            if (prevProps[key] !== nextProps[key]) {
                if (loggingEnabled) { console.log(key); }
                return false;
            }
        }

        return true;
    }
}


export { areEqual }
