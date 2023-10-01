function solution(num_list, n) {
    return num_list.filter((value, index) => index % n === 0);
}