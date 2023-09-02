function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    const isSameSign = x * y > 0;
    
    if (isSameSign) {
        return x > 0 ? 1 : 3;
    }
    
    return x > 0 ? 4 : 2;
}