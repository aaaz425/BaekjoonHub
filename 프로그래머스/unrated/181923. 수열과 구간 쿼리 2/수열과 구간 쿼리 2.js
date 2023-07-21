function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(query => {
        const [s, e, k] = query;
        const tempArr = [];
        
        for (let i = s; i <= e; i++) {
            if (arr[i] > k) {
                tempArr.push(arr[i]);
            }
        }
        
        if (!tempArr.length) {
            answer.push(-1);
            return;
        }
        
        const minValue = Math.min(...tempArr);
        
        answer.push(minValue);
    })
    
    return answer;
}