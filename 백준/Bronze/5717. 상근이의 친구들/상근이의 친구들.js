const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [m, f] = input[i].split(' ').map(Number);
    
    if (!(m + f)) {
        break;
    }
    
    console.log(m + f);
}