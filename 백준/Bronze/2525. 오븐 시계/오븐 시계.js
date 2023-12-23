const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);

  if (input.length === 2) {
    rl.close();
  }
}).on('close', () => {
  const [currentTime, time] = input;
  const [hour, minute] = currentTime.split(' ');
  const totalCurrentTime = +hour * 60 + +minute;
  const totalTime = totalCurrentTime + +time;

  let endTime = 0;
  const endMinute = totalTime % 60;

  if (totalTime >= 1440) {
    endTime = Math.floor((totalTime - 1440) / 60);

    console.log(`${endTime} ${endMinute}`);
    process.exit();
  }

  endTime = Math.floor(totalTime / 60);

  console.log(`${endTime} ${endMinute}`);
  process.exit();
});
