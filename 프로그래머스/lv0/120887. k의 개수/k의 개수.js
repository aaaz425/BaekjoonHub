function solution(i, j, k) {
    return Array.from({ length: j - i + 1 }, (_, index) => index + i)
        .join('')
        .split('')
        .filter((v) => v == k)
        .length;
}