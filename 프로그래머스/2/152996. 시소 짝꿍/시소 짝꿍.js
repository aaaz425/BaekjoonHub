function solution(weights) {
    const map = new Map();
    let answer = 0;

    weights.sort((a, b) => a - b);

    for (const w of weights) {
        const targets = [
            w,
            (w * 2) / 3,
            (w * 1) / 2,
            (w * 3) / 4 
        ];

        for (const t of targets) {
            if (map.has(t)) {
                answer += map.get(t);
            }
        }

        map.set(w, (map.get(w) || 0) + 1);
    }

    return answer;
}