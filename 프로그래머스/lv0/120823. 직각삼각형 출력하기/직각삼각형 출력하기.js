const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// function setStar(index) {
//     let arr = []
//     for(let i = 1; i <= index; i++) {
//         arr.push('*');
//     }
//     return arr.join('')
// }

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

//repeat 사용
function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}
