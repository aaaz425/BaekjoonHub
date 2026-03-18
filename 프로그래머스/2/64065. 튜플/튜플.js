function solution(s) {
    const count = new Map();
    const numbers = s.match(/\d+/g).map(Number);

    for (const num of numbers) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    return [...count.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([num]) => num);
}