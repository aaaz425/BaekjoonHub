function solution(t, p) {
    let answer = 0;
    const length = p.length;
    
    for (let i = 0; i < t.length; i++) {
        const sliced = t.slice(i, length + i)
        if (p >= sliced && sliced.length === length) {
            answer++;
        }
    }
    
    return answer;
}