function solution(my_string, m, c) {
    const answer = [];
    
    for (let i = 0; i < m; i++) {
        answer.push([]);
    }
    
    for (let i = 0; i < my_string.length; i++) {
        answer[i % m].push(my_string[i]);
    }
    
    return answer[c - 1].join('')
}