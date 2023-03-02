function solution(my_string) {
    return my_string.split(/\D/gi).reduce((acc, cur) => acc + +cur, 0);
}