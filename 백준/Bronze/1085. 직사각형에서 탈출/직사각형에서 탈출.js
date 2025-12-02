const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const [x, y, w, h] = input;
const answer = Math.min(x, y, w - x, h - y);
console.log(answer);
