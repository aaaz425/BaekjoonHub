const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let idx = 0;
const T = Number(input[idx++]);

for (let t = 0; t < T; t++) {
    const n = Number(input[idx++]);
    const numbers = input[idx++].split(' ').map(Number);

    const sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}