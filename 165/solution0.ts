function compareVersion(version1: string, version2: string): number {
    const ver1 = version1.split(".").map(v => Number(v));
    const ver2 = version2.split(".").map(v => Number(v));
    const m = ver1.length;
    const n = ver2.length;
    for (let i = 0; i < Math.max(m, n); i++) {
        const a = ver1[i] ?? 0;
        const b = ver2[i] ?? 0;
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    }
    return 0;
};
