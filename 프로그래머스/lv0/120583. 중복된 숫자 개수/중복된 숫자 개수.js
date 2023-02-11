function solution(array, n) {
    const newArr = array.filter(element => element === n)
    return newArr.length
}