function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    answer = `${min} ${max}`
    return answer;
}