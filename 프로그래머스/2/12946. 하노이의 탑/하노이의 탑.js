function solution(n) {
    const answer = [];

    function hanoi(count, from, via, to) {
        if (count === 1) {
            answer.push([from, to]);
            return;
        }

        hanoi(count - 1, from, to, via);
        answer.push([from, to]);
        hanoi(count - 1, via, from, to);
    }

    hanoi(n, 1, 2, 3);

    return answer;
}