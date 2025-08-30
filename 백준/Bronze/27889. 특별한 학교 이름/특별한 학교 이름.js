const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const obj = {
    'NLCS': 'North London Collegiate School',
    'BHA': 'Branksome Hall Asia',
    'KIS': 'Korea International School',
    'SJA': 'St. Johnsbury Academy',
}

console.log(obj[input]);