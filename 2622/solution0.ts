class TimeLimitedCache {
    private _cache: Record<number,{value:number,timeout:any}>;
    constructor() {
        this._cache={};
    }
    
    set(key: number, value: number, duration: number): boolean {
        const item = this._cache[key];
        if(item) {
            clearTimeout(item.timeout);
            this._cache[key]={value,timeout:setTimeout(()=>delete this._cache[key],duration)};
            return true;
        }
        this._cache[key]={value,timeout:setTimeout(()=>delete this._cache[key],duration)};
        return false;
    }
    
    get(key: number): number {
        const item = this._cache[key];
        if(item) {
            return item.value;
        }
        return -1;
    }
    
    count(): number {
        return Object.keys(this._cache).length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
