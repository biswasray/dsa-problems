function findMaxK(nums: number[]): number {
    nums.sort((a,b)=>a-b);
    let [a,b] = [0,nums.length-1];
    while(a<b) {
        const [x,y] = [nums[a],nums[b]];
        if(x>=0) {
            break;
        }
        if(-x===y) {
            return y;
        }
        if(-x<y) {
            b--;
        }
        else {
            a++;
        }
    }
    return -1;
};
