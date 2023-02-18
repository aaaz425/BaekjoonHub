function solution(my_string) {
    return ([...my_string].filter((element) => +element * 0 === 0)).sort().map(element => +element)
}