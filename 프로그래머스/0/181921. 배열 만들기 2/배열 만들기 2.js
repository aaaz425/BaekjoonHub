function solution(l, r) {
    const answerArr = Array.from({length : r - l + 1}, (_, i) => i + l)
        .filter(num => [...num.toString()].every(n => n === '0' || n === '5'));
    
    return answerArr.length ? answerArr : [-1];
}