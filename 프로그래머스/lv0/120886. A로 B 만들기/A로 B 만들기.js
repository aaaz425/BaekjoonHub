function solution(before, after) {
    [...before].forEach((v) => after = after.replace(v, ''));
    return after.length === 0 ? 1 : 0;
}