function solution(my_string, n) {
    return [...my_string]
        .reverse()
        .slice(0, n)
        .reverse()
        .join("");
}