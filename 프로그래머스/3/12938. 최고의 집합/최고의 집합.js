function solution(n, s) {
    if (s < n) return [-1];

    const quotient = Math.floor(s / n);
    const remainder = s % n;

    const result = Array(n).fill(quotient);

    for (let i = n - 1; i >= n - remainder; i--) {
        result[i] += 1;
    }

    return result;
}