function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const queue = [{ word: begin, steps: 0 }];
    const visited = new Set();

    while (queue.length) {
        const { word, steps } = queue.shift();

        if (word === target) return steps;

        for (const next of words) {
            if (!visited.has(next) && isConvertible(word, next)) {
                visited.add(next);
                queue.push({ word: next, steps: steps + 1 });
            }
        }
    }

    return 0;
}

function isConvertible(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}