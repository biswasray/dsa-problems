function findRelativeRanks(score: number[]): string[] {
    const dup = [...score];
    dup.sort((a, b) => b - a);
    const rank = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal",
    }
    return score.map(s => {
        const pos = dup.findIndex(d => d === s);
        return `${rank[pos] ?? pos + 1}`;
    });
};
