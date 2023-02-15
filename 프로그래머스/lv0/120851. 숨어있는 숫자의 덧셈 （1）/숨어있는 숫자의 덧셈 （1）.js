function solution(my_string) {
    const my_arr = [...my_string]
    return my_arr.reduce((acc, cur) => +cur * 0 === 0 ? acc + +cur : acc, 0)
}