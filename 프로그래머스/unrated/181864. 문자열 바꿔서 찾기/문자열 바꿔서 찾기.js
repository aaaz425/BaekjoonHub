function solution(myString, pat) {
    return [...myString].map(value => {
        return value === "A" ? "B" : "A";
    })
    .join("")
    .indexOf(pat) === -1 ? 0 : 1;
}