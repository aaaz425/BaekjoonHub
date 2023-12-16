const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

const input = [];

rl.on('line', (line) => {
  input.push(line);

  if(input.length === 2) {
    rl.close();
  }
}).on('close', () => {
  const [a, b] = input;
    
  console.log(a * b[2]);
  console.log(a * b[1]);
  console.log(a * b[0]);
  console.log(a * b);
  
  process.exit();
})