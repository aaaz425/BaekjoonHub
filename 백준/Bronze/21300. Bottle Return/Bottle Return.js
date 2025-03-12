const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sum = input.reduce((acc, cur) => acc + (+cur * 5), 0);
console.log(sum);