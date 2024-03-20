function solution(n, m) {
    const [s, b] = [n, m].sort((a, b) => a - b);
    
    const commonDivisor = Array.from({length: s}, (_, i) => i + 1)
        .filter(v => s % v === 0 && b % v === 0).at(-1);
    
    return [commonDivisor, s * b / commonDivisor];
}