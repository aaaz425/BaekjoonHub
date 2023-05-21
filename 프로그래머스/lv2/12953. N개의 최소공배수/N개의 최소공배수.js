function solution(arr) {
    let count = 0;
    const min = Math.min(...arr)
    let answer = min;
    const leng = arr.length;
    
    while (true) {
       arr.forEach(value => {
           if (answer % value === 0) {
               count ++;
           }
       })
        
        if (count === leng) {
            return answer;
        }
        
        count = 0;
        answer += min;
    }
    
    return answer;
}