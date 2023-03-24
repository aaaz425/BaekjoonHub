function solution(numbers) {
    const numbersChar = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbersChar.forEach(value => {
        numbers = numbers.replaceAll(value, numbersChar.indexOf(value));
    })
    return parseInt(numbers);
}