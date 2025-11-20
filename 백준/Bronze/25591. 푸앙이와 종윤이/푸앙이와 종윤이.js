const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const a = 100 - x;
const b = 100 - y;

const c = 100 - (a + b);
const d = a * b;

const q = Math.floor(d / 100);
const r = d % 100;

const front = c + q;
const back = r;

console.log(a, b, c, d, q, r);
console.log(front, back);