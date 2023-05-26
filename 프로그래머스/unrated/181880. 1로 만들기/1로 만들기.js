function solution(num_list) {
    const answer = [];
    
    for(let i = 0; i < num_list.length; i++) {
        let value = num_list[i];
        let count = 0;
        
        while(value !== 1) {
            value = value % 2 === 1 ? (value - 1) / 2 : value / 2;
            count++;
        }
        
        answer.push(count)    
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}