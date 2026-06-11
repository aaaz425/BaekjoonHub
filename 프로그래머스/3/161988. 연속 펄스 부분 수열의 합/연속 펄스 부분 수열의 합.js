function solution(sequence) {
    let maxEnding = sequence[0];
    let minEnding = sequence[0];

    let first = sequence[0];

    let maxSum = first;
    let minSum = first;

    for (let i = 1; i < sequence.length; i++) {
        const value = sequence[i] * (i % 2 === 0 ? 1 : -1);

        maxEnding = Math.max(value, maxEnding + value);
        maxSum = Math.max(maxSum, maxEnding);

        minEnding = Math.min(value, minEnding + value);
        minSum = Math.min(minSum, minEnding);
    }

    return Math.max(maxSum, -minSum);
}