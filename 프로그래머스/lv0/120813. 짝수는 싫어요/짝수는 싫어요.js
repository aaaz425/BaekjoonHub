function solution(n) {
    return Array.from({length: n}, (_, i) => i + 1)
    .filter(value => value % 2 === 1)
    .sort((a, b) => a - b);
}