const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = [];
let answer = [];
const color = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

rl.on('line', (line) => {
  input.push(line);
  if(input.length == 3) {
    rl.close();
  }
}).on('close', () => {
  for(let i = 0; i < 2; i++){
    answer.push((color.indexOf(input[i])).toString());
  }
  console.log(parseInt(answer.join('')) * (10 ** color.indexOf(input[2])));
  process.exit();
})