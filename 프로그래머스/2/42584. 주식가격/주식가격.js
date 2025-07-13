function solution(prices) {
    return prices.map((val, idx) => {
        let sum = 0;
        for (let i = idx + 1; i < prices.length; i++) {
            sum += 1;
            
            if (val > prices[i]) {
                break;
            }
        }
        
        return sum;
    })
}