const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let result = [];

for (const line of input) {
  if (!line.trim()) continue;
  const [N, S] = line.split(' ').map(Number);
  result.push(Math.floor(S / (N + 1)));
}

console.log(result.join('\n'));