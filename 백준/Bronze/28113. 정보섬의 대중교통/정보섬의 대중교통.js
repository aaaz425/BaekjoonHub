const fs = require('fs');
const [N, A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (A < B) {
    console.log('Bus');
} else if (A > B) {
    console.log('Subway');
} else {
    console.log('Anything');
}