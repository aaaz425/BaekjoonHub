function solution(num_list) {
    const arrLen = num_list.length;
    const lastIndex = arrLen - 1;
    const beforeLastIndex = arrLen - 2;
    if (num_list[lastIndex] > num_list[beforeLastIndex]) {
        num_list.push(num_list[lastIndex] - num_list[beforeLastIndex]);
    } else {
        num_list.push(num_list[lastIndex] * 2);
    }
    return num_list;
}