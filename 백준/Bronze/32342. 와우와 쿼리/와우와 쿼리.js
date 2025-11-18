const fs = require('fs');
const [N, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

input.forEach(line => {
  let cnt = 0;
  for (let i = 0; i <= line.length - 3; i++) {
    if (line.substring(i, i + 3) === 'WOW') cnt++;
  }
  console.log(cnt);
});