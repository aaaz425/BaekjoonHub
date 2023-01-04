const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = [];

rl.on('line', (line) => {
  input = line.toString().split(' ');
  rl.close();
}).on('close', () => {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  console.log(a+b);
  process.exit();
})