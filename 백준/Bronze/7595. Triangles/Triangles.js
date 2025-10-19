const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const n = +input[i];
    
    if (!n) {
        break;
    }
    
    for (let j = 1; j <= n; j++) {
        console.log('*'.repeat(j));
    }
}