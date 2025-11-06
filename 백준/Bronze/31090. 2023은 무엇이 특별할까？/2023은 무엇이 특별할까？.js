const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = +lines[0];

for (let i = 1; i <= T; i++) {
  const s = lines[i].trim();
  const year = BigInt(s);
  const lastTwo = Number(s.slice(-2));

  if (lastTwo === 0) {
    console.log('Bye');
  } else {
    const next = year + 1n;
    if (next % BigInt(lastTwo) === 0n) {
      console.log('Good');
    } else {
      console.log('Bye');
    }
  }
}