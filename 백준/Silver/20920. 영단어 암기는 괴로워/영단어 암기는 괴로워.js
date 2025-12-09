const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const freq = new Map();

for (let i = 1; i <= N; i++) {
    const word = input[i].trim();

    if (word.length < M) continue;

    freq.set(word, (freq.get(word) || 0) + 1);
}

const words = [...freq.keys()];

words.sort((a, b) => {
    const fa = freq.get(a);
    const fb = freq.get(b);

    if (fa !== fb) return fb - fa;

    if (a.length !== b.length) return b.length - a.length;

    return a.localeCompare(b);
});

console.log(words.join('\n'));
