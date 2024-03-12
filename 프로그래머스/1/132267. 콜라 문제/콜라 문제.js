function solution(a, b, n) {
    let answer = 0;
    let possess = n;
    let possible = true;
    
    while (possible) {
        const share = Math.floor(possess / a);
        const rest = possess % a;
        possess = rest;
        
        const service = share * b;
        answer += service;
        possess += service;
        
        if (possess < a) {
            possible = false;
        }
    }
    
    return answer;
}