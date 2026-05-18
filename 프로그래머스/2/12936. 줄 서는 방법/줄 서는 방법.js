function solution(n, k) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    const answer = [];
    
    let fact = 1;
    
    for (let i = 2; i < n; i++) {
        fact *= i;
    }
    
    k--;
    
    for (let i = n; i >= 1; i--) {
        const idx = Math.floor(k / fact);
        
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
        
        k %= fact;
        
        if (i > 1) {
            fact /= (i - 1);
        }
    }
    
    return answer;
}