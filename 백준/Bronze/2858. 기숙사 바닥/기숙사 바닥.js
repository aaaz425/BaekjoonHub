const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const [red, brown] = input;
const total = red + brown;

for (let w = 1; w <= Math.sqrt(total); w++) {
  if (total % w !== 0) continue;

  const l = total / w;

  if ((l - 2) * (w - 2) === brown) {
    console.log(l, w);
    break;
  }
}