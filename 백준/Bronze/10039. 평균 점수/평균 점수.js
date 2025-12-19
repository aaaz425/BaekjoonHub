const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

let answer = 0;

input.forEach(v => {
    if (v < 40) {
        answer += 40;
    } else {
        answer += v;
    }
});

console.log(answer / 5);