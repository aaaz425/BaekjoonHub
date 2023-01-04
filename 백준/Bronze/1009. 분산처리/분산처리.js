const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = [];
const numArr = [1, 2, 3, 4];

rl.on('line', (line) => {
  input.push(line.toString().split(' '));
  if((input.length - 1) == input[0]) {
    input.shift();
    rl.close();
  }
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    const a = parseInt(input[i][0]) % 10;
    let b = parseInt(input[i][1]);
    if (a == 0) {
      console.log(10);
    } else if (a == 1 || a == 5 || a == 6) {
      console.log(a);
    } else if (a == 2 || a == 3 || a == 7 || a == 8) {
      b = numArr[(b - 1) % 4]
      console.log((a ** b) % 10);
    } else if (a == 4 || a == 9) {
      b = numArr[(b - 1) % 2]
      console.log((a ** b) % 10);
    }
  }
  process.exit();
})