function solve(input) {
  const [D, H, M] = input.trim().split(' ').map(Number);

  const startDay = 11, startHour = 11, startMin = 11;
  const minutesPerDay = 24 * 60;
  const minutesPerHour = 60;

  const startTotal = startDay * minutesPerDay + startHour * minutesPerHour + startMin;
  const endTotal   = D       * minutesPerDay + H        * minutesPerHour + M;

  const diff = endTotal - startTotal;
  console.log(diff >= 0 ? diff : -1);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
solve(input);