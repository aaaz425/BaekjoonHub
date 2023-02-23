function solution(n) {
    return Array.from({ length : n }, (_, i) => i + 1)
        .map(v => Array.from({ length : v }, (_, i) => i + 1))
        .map(v => v.filter(el => v[v.length - 1] % el === 0))
        .filter(v => v.length > 2)
        .length;
}