const fs = require('fs');
const [N, ...scores] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;

scores.forEach((score) => {
    const [a, d, g] = score.split(' ').map(Number);
    
    let cur = a * (d + g);
    if (a === d + g) {
        cur *= 2;
    }
    
    if (cur > max) {
        max = cur;
    }
})

console.log(max);