function solution(nums) {
    const numsLen = nums.length / 2;
    const uniqueArrLen = [...new Set(nums)].length;
    
    if (uniqueArrLen >= numsLen) {
        return numsLen;
    } else {
        return uniqueArrLen;
    }
}