function solution(num_list) {
    const oddSum = num_list
        .filter((_, i) => i % 2 === 0)
        .reduce((acc, cur) => acc + +cur, 0);
    const evenSum = num_list
        .filter((_, i) => i % 2 === 1)
        .reduce((acc, cur) => acc + +cur, 0);
    
    return evenSum >= oddSum ? evenSum : oddSum;
}