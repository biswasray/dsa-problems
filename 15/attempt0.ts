/**
 * Wrong Answer
 * 69 / 313 testcases passed
 * Input [0,0,0,0]
 * Output [[0,0,0],[0,0,0]]
 * Expected [[0,0,0]]
 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b);
    const m = nums.length-1;
    // let [a,b]=[0,nums.length-1];
    const result: number[][] = [];
    for(let i=1;i<m;i++) {
        let [a,b]=[i-1,i+1];
        while(a>=0&&b<=m) {
            const sum = nums[a]+nums[i]+nums[b];
            if(sum>0) {
                a--;
            }
            else if(sum<0) {
                b++;
            }
            else {
                result.push([nums[a],nums[i],nums[b]]);
                a--;
                b++;
            }
        }
    }
    return result;
};
