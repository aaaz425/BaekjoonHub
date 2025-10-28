const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a1, a2, a3] = a.split(' ');
const [b1, b2, b3] = b.split(' ');

function getRest(a, b) {
    return a - b < 0 ? 0 : a - b;
}

console.log(getRest(b1, a1) + getRest(b2, a2) + getRest(b3, a3));