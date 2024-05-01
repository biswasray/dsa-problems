type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return  function(...args) {
        return new Promise<ReturnType<Fn>>((res,rej)=>{
          setTimeout(()=>{
            return rej("Time Limit Exceeded")
          },t);
          fn(...args).then(res).catch(rej);
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
