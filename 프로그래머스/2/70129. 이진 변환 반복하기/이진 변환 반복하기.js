function solution(s) {
    let changeCount = 0;
    let zeroCount = 0;
    
    while(s.length > 1) {
        const fullLen = s.length;
        s = s.split('').filter(val => val === '1').join('');
        const filteredLen = s.length;
        zeroCount += fullLen - filteredLen;
        
        s = s.length.toString(2);
        
        changeCount++;
    }
    
    return [changeCount, zeroCount];
}