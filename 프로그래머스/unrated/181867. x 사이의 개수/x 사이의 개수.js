function solution(myString) {
    return myString
        .split('x')
        .map(value => {
            return value.length;
        });
}