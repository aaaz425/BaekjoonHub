const fs = require('fs');
const n = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

function factorial(n) {
  if (n === 0n || n === 1n) return 1n;

  function multiplyRange(start, end) {
    if (start > end) return 1n;
    if (start === end) return start;
    if (end - start === 1n) return start * end;

    const mid = (start + end) / 2n;
    return multiplyRange(start, mid) * multiplyRange(mid + 1n, end);
  }

  return multiplyRange(1n, n);
}

console.log(factorial(n).toString());