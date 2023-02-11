function solution(array, height) {
    const newArr = array.filter(element => element > height)
    return newArr.length;
}