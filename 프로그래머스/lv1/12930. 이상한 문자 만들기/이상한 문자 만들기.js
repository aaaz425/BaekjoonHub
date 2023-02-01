const strToArr = str => str.split(' ');

const arrToStr = arr => arr.join('');

function stranger(arr) {
  let result = [];
  arr.forEach(element => {
    let i = 0;
    const word = element.split('');
    word.forEach(element => {
      i % 2 === 0 ? result.push(element.toUpperCase()) : result.push(element.toLowerCase());
      i++;
    })
    result.push(' ');
  })
  result.pop();
  return result;
}

function solution(str) {
  const arr = strToArr(str);
  const strange = stranger(arr);
  const answer = arrToStr(strange);
  return answer;
}