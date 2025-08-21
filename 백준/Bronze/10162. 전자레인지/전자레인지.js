const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let target = +input;

if (target % 10) {
    console.log(-1);
} else {
    const A = Math.floor(target / 300);
    target -= A * 300;
    
    const B = Math.floor(target / 60);
    target -= B * 60;
          
    const C = target / 10;

    console.log(`${A} ${B} ${C}`);
}