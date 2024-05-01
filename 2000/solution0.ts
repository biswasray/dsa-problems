function reversePrefix(word: string, ch: string): string {
    const n = word.length;
    let ind=-1;
    for(let i=0;i<n;i++) {
        if(word[i]===ch) {
            ind=i;
            break;
        }
    }
    if(ind===-1) return word;
    let res="";
    for(let i=ind;i>=0;i--) {
        res+=word[i];
    }
    return res+word.substring(ind+1,n);
};
