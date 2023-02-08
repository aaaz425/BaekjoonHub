function solution(my_string) {
    var answer = '';
    const splitStr = my_string.split('');
    const reverseStr = splitStr.reverse();
    answer = reverseStr.join('');
    return answer;
}