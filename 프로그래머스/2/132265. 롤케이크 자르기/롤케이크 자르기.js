function solution(topping) {
    const leftSet = new Set();
    const rightMap = new Map();
    let answer = 0;

    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];

        leftSet.add(t);

        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }

        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }

    return answer;
}