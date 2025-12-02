const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let K = Number(input[0]);
let N = Number(input[1]);
let time = 0;
let current = K;

for (let i = 2; i < 2 + N; i++) {
    const [T, Z] = input[i].split(' ');
    const t = Number(T);

    time += t;

    if (time >= 210) {
        console.log(current);
        return;
    }

    if (Z === 'T') {
        current += 1;
        if (current > 8) current = 1;
    }
}