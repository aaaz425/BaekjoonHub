function solution(numbers, direction) {
    let number = 0;
    if(direction === 'left') {
        number = numbers[0];
        numbers.shift();
        numbers.push(number);
    } else {
        number = numbers[numbers.length-1];
        numbers.pop();
        numbers.unshift(number);
    }
    return numbers;
}