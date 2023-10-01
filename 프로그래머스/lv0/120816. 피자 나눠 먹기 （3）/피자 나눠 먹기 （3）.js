function solution(slice, n) {
    const share = Math.floor(n / slice);
    const remain = n % slice;
    
    if (remain) {
        return share + 1;
    }
    
    return share;
}