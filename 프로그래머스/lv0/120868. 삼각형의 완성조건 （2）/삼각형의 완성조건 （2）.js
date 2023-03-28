function solution(sides) {
    const sum = sides.reduce((acc, cur) => acc + cur) - 1;
    const subtract = Math.max(...sides) - Math.min(...sides);
    return sum - subtract;
}