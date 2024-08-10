function solution(want, number, discount) {
    let result = 0;
    
    const wantObj = {}
    want.forEach((v, i) => wantObj[v] = number[i]);
    
    for (let i = 0; i < discount.length - 9; i++) {
        const duplObj = {...wantObj};
        let temp = 0;
        
        for (let j = 0; j < 10; j++) {
            if (!duplObj[discount[i + j]]) {
                break;
            }
            
            duplObj[discount[i + j]] -= 1;
            temp++;
        }
        
        if (temp === 10) {
            result++;
        }
    }
    
    return result;
}