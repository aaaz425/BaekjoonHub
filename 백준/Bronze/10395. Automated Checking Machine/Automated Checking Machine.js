const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const X = input[0].split(' ').map(Number);
const Y = input[1].split(' ').map(Number);

let ok = true;

for (let i = 0; i < 5; i++) {
    if (X[i] + Y[i] !== 1) {
        ok = false;
        break;
    }
}

console.log(ok ? 'Y' : 'N');