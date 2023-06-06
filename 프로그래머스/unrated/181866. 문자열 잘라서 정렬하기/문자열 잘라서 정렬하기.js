function solution(myString) {
    return myString
        .split('x')
        .filter(value => {
            return value !== "";
        })
        .sort();
}