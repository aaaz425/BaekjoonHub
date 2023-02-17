function solution(my_string) {
    const myArr = [...my_string];
    const newArr = myArr.map((element) => element == element.toLowerCase() ? element.toUpperCase() : element.toLowerCase());
    return newArr.join('');
}