const fs = require('fs');
const kings = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < kings.length; i++) {
    const [a, b, c, d] = kings[i].split(' ').map(Number);
    if (!a && !b && !c && !d) {
        break;
    }
    
    console.log(`${c - b} ${d - a}`);
}