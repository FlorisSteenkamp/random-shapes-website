/**
 * Memoize (by string on the input parameter) the given arity 1 function.
 */
function memoizeByStr<U>(f: (a: string) => U): (a: string) => U {
	const results = new Map<string,U>();
	
	return function(a: string): U {
		let result = results.get(a);
		if (result !== undefined) {
			//console.log('cache hit');
			return result; 
		}

		//console.log('cache miss');
		result = f(a);
		results.set(a, result);
		
		return result;
	}
}


export { memoizeByStr }
