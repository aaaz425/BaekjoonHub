function solution(num_list, n) {
    const front = num_list.splice(n, num_list.length);
    const back = num_list.splice(0, n);
    return [...front, ...back];
}