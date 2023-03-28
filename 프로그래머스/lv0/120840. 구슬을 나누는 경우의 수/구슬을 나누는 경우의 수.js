function factorial(num) {
    let answer = BigInt(1);
    for (let i = 1; i <= num; i++) {
        answer *= BigInt(i);
    }
    return answer;
}

function solution(balls, share) {
    if (balls === share) {
        return 1;
    } else {
        return factorial(balls) / (factorial(balls - share) * factorial(share));
    }
}