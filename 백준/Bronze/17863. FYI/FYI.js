const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

if (input.slice(0, 3) === '555') {
    console.log('YES');
} else {
    console.log('NO');
}