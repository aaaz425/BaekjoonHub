function solution(arr, intervals) {
    const answer = [];
    
    intervals.forEach(interval => {
        for (let i = interval[0]; i <= interval[1]; i++) {
            answer.push(arr[i]);
        }
    })
    
    return answer;
}