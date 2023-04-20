function solution(myString) {
    return [...myString]
        .map(v => v.toLowerCase())
        .join("");
}