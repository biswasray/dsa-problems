type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const _cache: Record<string, ReturnType<Fn>> = {}
    return function (...args: Parameters<Fn>) {
        const key = args.join(",");
        if (typeof _cache[key] === "undefined") {
            const result = fn(...args);
            _cache[key] = result;
            return result;
        } else {
            return _cache[key];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
