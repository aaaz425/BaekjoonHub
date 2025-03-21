const fs = require('fs');
const [s, f] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

if (+s <= +f) {
    console.log('high speed rail');
} else {
    console.log('flight');
}