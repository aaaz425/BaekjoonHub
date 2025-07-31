function solution(n, t, m, p) {
    let sequence = '';
    let number = 0;

    while (sequence.length < t * m) {
        sequence += number.toString(n).toUpperCase();
        number++;
    }

    let answer = '';
    for (let i = 0; i < t; i++) {
        answer += sequence[(i * m) + (p - 1)];
    }

    return answer;
}