const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idx = 0;

const T = Number(input[idx++]);

for (let i = 0; i < T; i++) {
    const [x, y] = input[idx++].split(' ').map(Number);

    const isTime = (0 <= x && x <= 23) && (0 <= y && y <= 59);

    let isDate = false;
    if (1 <= x && x <= 12) {
        const monthDays = {
            1: 31, 2: 29, 3: 31, 4: 30,
            5: 31, 6: 30, 7: 31, 8: 31,
            9: 30, 10: 31, 11: 30, 12: 31
        };
        if (1 <= y && y <= monthDays[x]) {
            isDate = true;
        }
    }

    console.log(isTime ? "Yes" : "No", isDate ? "Yes" : "No");
}