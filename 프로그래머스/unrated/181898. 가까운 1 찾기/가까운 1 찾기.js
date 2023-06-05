function solution(arr, idx) {
    const find = arr.splice(idx).indexOf(1);
    return find !== -1 ? find + idx : find;
}