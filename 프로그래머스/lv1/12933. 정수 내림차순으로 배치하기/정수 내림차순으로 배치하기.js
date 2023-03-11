function solution(n) {
    return +(n.toString().split('')
    .sort((a, b) => b - a)
    .map(v => +v)
    .join(''))
}