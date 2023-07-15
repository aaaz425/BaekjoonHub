function solution(A,B){
    const up = A.sort((a, b) => a - b);
    const down = B.sort((a, b) => b - a);
    
    const min = up.reduce((acc, cur, i) => {
        return acc + cur * down[i];
    }, 0)
    
    return min;
}