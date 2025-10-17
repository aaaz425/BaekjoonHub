const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length; i++) {
    const n = input[i];
    if (!n) {
        break;
    }
    
    console.log((n * (n + 1)) / 2);
}