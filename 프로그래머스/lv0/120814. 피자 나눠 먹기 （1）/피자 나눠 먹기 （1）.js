function solution(n) {
    const share = Math.floor(n / 7);
    const remain = n % 7;
    
    if (remain) {
        return share + 1;
    }
    
    return share;
}