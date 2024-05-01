// 11. Container With Most Water

function maxArea(height: number[]): number {
    let [a,b,res]=[0,height.length-1,0];
    while(a<b) {
        const w= Math.min(height[a],height[b])*(b-a);
        res=Math.max(res,w);
        height[a]>height[b]?b--:a++;
    }
    return res;
};
