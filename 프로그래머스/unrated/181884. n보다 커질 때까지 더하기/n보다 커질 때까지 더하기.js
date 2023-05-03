function solution(numbers, n) {
    let answer = 0;
    let i = 0;
    while (n >= answer) {
        answer += numbers[i];
        i++;
    }
    return answer;
}