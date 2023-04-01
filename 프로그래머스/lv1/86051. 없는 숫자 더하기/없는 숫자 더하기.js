function solution(numbers) {
    return Array.from({length : 9}, (_, i) => i + 1)
    .reduce((acc, cur) => acc + cur) - numbers
    .reduce((acc, cur) => acc + cur);
}