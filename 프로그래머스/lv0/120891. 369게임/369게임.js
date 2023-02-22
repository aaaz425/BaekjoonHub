function solution(order) {
    return [...order.toString()]
        .filter(v => v == 3 || v == 6 || v == 9)
        .length;
}

// 정규표현식, matchAll 사용
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}
