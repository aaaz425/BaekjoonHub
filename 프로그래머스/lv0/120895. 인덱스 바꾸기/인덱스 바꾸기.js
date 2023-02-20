function solution(my_string, num1, num2) {
    let answer = [...my_string];
    answer[num1] = my_string[num2];
    answer[num2] = my_string[num1];
    return answer.join('')
}

// 구조 분해 할당 활용
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
