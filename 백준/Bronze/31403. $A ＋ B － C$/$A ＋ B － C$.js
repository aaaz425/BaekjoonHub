const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B, C] = input;

console.log(+A + +B - +C);
console.log(+(`${A}${B}`) - +C);