function solution(numbers) {
    const answer = [];
    
    numbers.forEach((number1, index1) => {
        numbers.forEach((number2, index2) => {
            if (index1 !== index2) {
                answer.push(number1 + number2);
            }
        })
    })
    
    return [...new Set(answer)].sort((a, b) => a- b);
}