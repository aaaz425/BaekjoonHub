function solution(my_string) {
    return [...my_string]
    .filter((v, i) => my_string
    .indexOf(v) === i)
    .join('');
}