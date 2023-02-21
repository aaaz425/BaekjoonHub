function solution(array) {
    const newArr = [...array].sort((a, b) => a - b);
    const index = array.indexOf(newArr[newArr.length - 1]);
    return [newArr[newArr.length - 1], index];
}