function solution(lottos, win_nums) {
    const zeroCount = lottos.filter(v => v === 0).length;
    
    const confirmedCount = win_nums.reduce((acc, cur) => {
        if (lottos.indexOf(cur) >= 0) {
            return acc + 1;
        }
        
        return acc;
    }, 0);
    
    const max = 7 - (zeroCount + confirmedCount);
    const min = 7 - confirmedCount;
    
    return [max === 7 ? 6 : max, min === 7 ? 6 : min];
}