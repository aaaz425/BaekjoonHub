const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close',function(){
    const answer = input.map((value) => {
        return value === value.toUpperCase() ? value.toLowerCase() : value.toUpperCase();
    })
    console.log(answer.join(''));
});