function solution(s1, s2) {
    var answer = 0;
    s1.forEach(element => s2.includes(element) ? answer++ : answer);
    return answer;
}