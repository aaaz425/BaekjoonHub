function solution(arr) {
    const answer = [...arr];
    let count = 0;
    
    for (let i = 0; answer.length > 2 ** i; i++) {
        count++;
    }
    
    while(answer.length < 2 ** count) {
        answer.push(0);
    }
    
    return answer;
}