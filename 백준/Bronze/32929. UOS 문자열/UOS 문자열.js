const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const index = +input % 3 - 1;

console.log('UOS'[index >= 0 ? index : 2]);