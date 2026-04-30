function solution(n, stations, w) {
    let range = w * 2 + 1;
    let cur = 1;
    let answer = 0;
    
    for (const station of stations) {
        const start = station - w;
        const end = station + w;
        
        if (cur < start) {
            const gap = start - cur;
            answer += Math.ceil(gap / range);
        }
        
        cur = end + 1;
    }
    
    if (cur <= n) {
        const gap = n - cur + 1;
        answer += Math.ceil(gap / range)
    }
    
    return answer;
}