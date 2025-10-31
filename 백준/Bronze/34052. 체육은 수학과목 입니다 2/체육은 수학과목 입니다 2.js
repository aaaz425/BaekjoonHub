const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').reduce((acc, cur) => acc + +cur, 0);

console.log(input + 300 > 1800 ? 'No' : 'Yes');