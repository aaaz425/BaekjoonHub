function solution(numbers) {
    const set = new Set();
    
    numbers.forEach((number1, index1) => {
        numbers.forEach((number2, index2) => {
            if (index1 !== index2) {
                set.add(number1 + number2);
            }
        })
    })
    
    return [...set].sort((a, b) => a- b);
}