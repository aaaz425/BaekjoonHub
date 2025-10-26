const fs = require('fs');
const [N, d] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = d.split(' ').map(Number);
const a = Math.floor(A / 2);

if (N > a + B) {
    console.log(a + B);
} else {
    console.log(N);
}