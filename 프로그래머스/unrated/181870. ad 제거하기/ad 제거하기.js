function solution(strArr) {
    const answer = [];
    
    strArr.forEach(v => {
        if (!v.includes("ad")) {
            answer.push(v);
        }
    })
    
    return answer;
}