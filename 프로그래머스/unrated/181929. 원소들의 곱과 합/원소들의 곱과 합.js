function solution(num_list) {
    let totalMultiply = 1;
    let totalSum= 0;
    num_list.forEach((value) => {
        totalMultiply *= value;
        totalSum += value;
    })
    return totalMultiply < totalSum ** 2 ? 1 : 0;
}