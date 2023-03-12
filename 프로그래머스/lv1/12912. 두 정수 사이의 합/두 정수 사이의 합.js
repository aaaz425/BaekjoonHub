function solution(a, b) {
    if(a >= b) {
        return Array.from({length : a - b + 1}, (_, i) => i + b)
        .reduce((acc, cur) => acc + cur);
    } else {
        return Array.from({length : b - a + 1}, (_, i) => i + a)
        .reduce((acc, cur) => acc + cur);
    }
}