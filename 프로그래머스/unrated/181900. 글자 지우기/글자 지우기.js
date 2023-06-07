function solution(my_string, indices) {
    let answer = [...my_string];
    indices
        .sort((a, b) => b - a)
        .forEach(value => {
        answer.splice(value, 1);
    })
    return answer.join('');
}