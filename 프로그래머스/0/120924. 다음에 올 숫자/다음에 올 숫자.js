function solution(common) {
    const first = common[0];
    const second = common[1];
    const secondLast = common.at(-2);
    const last = common.at(-1);
    
    const isArithmetic = second - first === last - secondLast;
    
    const answer = isArithmetic ? last + (second - first) : last * (second / first);
    
    return answer;
}