const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(pwd => {
    if (pwd.length >=6 && pwd.length <= 9) {
        console.log('yes');
    } else {
        console.log('no');
    }
})