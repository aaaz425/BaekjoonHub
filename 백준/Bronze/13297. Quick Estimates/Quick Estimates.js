const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    const s = input[i].trim();
    console.log(s.length);
}