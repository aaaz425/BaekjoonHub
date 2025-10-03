const fs = require('fs');
const [n, f, m] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const friends = f.split(' ');
let answer = 0;

friends.forEach(v => {
    if (v === m) {
        answer++;
    }
});

console.log(answer);