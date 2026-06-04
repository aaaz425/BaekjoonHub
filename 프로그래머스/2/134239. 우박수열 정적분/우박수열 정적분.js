function solution(k, ranges) {
    const seq = [k];

    while (k !== 1) {
        if (k % 2 === 0) {
            k /= 2;
        } else {
            k = k * 3 + 1;
        }
        seq.push(k);
    }

    const n = seq.length - 1;

    const prefix = [0];

    for (let i = 0; i < n; i++) {
        const area = (seq[i] + seq[i + 1]) / 2;
        prefix.push(prefix[prefix.length - 1] + area);
    }

    const answer = [];

    for (const [a, b] of ranges) {
        const end = n + b;

        if (a > end) {
            answer.push(-1);
        } else {
            answer.push(prefix[end] - prefix[a]);
        }
    }

    return answer;
}