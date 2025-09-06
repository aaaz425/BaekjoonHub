const fs = require('fs');
const [n, name] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let score = 0;

for (let i = 0; i < +n; i++) {
     score += name[i].charCodeAt() - 64;
}

console.log(score);