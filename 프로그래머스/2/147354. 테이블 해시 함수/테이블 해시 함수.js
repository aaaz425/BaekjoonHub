function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => {
        if (a[col - 1] !== b[col - 1]) {
            return a[col - 1] - b[col - 1];
        }
        
        return b[0] - a[0];
    });
    
    let answer = 0;
    
    for (let i = row_begin; i <= row_end; i++) {
        
        const row = data[i - 1];
        
        const S = row.reduce((sum, value) => {
            return sum + (value % i);
        }, 0);
        
        answer ^= S;
    }
    
    return answer;
}