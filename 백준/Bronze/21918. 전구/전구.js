const fs = require('fs');
let [N, bulbs, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

bulbs = bulbs.split(' ').map(Number);

commands.forEach(command => {
    const [a, b, c] = command.split(' ');
    
    if (a === '1') {
        bulbs[+b - 1] = +c;
    } else {
        const l = +b - 1;
        const r = +c;
        
        for (let i = l; i < r; i++) {
            if (a === '2') {
                if (bulbs[i]) {
                    bulbs[i] = 0;
                } else {
                    bulbs[i] = 1;
                }
            } else if (a === '3') {
                bulbs[i] = 0;
            } else {
                bulbs[i] = 1;
            }   
        }
    }
})

console.log(bulbs.join(' '));