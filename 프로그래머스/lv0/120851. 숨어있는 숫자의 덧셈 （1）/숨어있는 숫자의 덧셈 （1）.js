function solution(my_string) {
    return [...my_string].reduce((acc, cur) => +cur * 0 === 0 ? acc + +cur : acc, 0)
}