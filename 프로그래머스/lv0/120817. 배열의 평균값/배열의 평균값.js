function solution(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    return total / numbers.length;
}