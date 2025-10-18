const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 1;
for (let line of input) {
  if (line === '0') break;
  console.log(`Case ${count}: Sorting... done!`);
  count++;
}