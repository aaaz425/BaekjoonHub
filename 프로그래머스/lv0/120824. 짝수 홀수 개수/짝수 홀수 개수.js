function solution(num_list) {
    const oddCount = num_list.filter(num => num % 2 === 1).length;
    return [num_list.length - oddCount, oddCount];
}