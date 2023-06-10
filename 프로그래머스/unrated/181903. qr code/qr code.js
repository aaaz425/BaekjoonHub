function solution(q, r, code) {
    const answer = [];
    
    for(let i = 0; i < code.length; i += q) {
        answer.push([...code].slice(i, i + q)[r]);
    }
    
    return answer.join('')
}