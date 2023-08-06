function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    let denom = denom1 * denom2;
    const num1 = numer1 * denom2;
    const num2 = numer2 * denom1;
    let numer = num1 + num2;
    
    for (let i = 1000 ** 2; i > 2; i--) {
        if(denom % i === 0 && numer % i === 0) {
            denom = denom / i;
            numer = numer / i;
        } else {
            continue;
        }
    }
    
    answer.push(numer);
    answer.push(denom);
    
    return answer;
}
