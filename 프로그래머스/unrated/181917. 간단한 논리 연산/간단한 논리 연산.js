function solution(x1, x2, x3, x4) {
    const left = x1 || x2 ? true : false;
    const right = x3 || x4 ? true: false;
    
    return left && right ? true: false;
}