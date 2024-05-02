function findMaxK(nums: number[]): number {
    const hashSet = new Set<number>();
    const n = nums.length;
    let max = -1;
    for (let i = 0; i < n; i++) {
        if (hashSet.has(-nums[i])) {
            max = Math.max(max, Math.abs(nums[i]))
        } else {
            hashSet.add(nums[i]);
        }
    }
    return max;
};
