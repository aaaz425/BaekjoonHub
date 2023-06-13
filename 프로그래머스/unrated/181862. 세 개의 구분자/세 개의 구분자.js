function solution(myStr) {
    const answer = myStr
        .split(/a|b|c/g)
        .filter(value => value !== "")
    
    return answer.length ? answer : ['EMPTY'];
}