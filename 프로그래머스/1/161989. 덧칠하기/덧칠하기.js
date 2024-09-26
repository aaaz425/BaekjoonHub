function solution(n, m, section) {
    let cnt = 0;
    let newSec = 0;
    
    section.forEach(v => {
        if (v > newSec) {
            newSec = v + m - 1;
            cnt++;
        }
    })
    
    return cnt;
}