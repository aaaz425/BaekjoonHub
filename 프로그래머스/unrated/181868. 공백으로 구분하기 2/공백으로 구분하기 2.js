function solution(my_string) {
    const answer = [];
    my_string.split(" ").forEach(value => {
        value === "" ? answer : answer.push(value);
    })
    return answer;
}