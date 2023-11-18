const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [n] = input;
    console.log(+n % 2 === 0 ? 
                `${n} is even` :
                `${n} is odd`)
});