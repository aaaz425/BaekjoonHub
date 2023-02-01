const findNum = (arr1, arr2) => arr1.slice(arr2[0]-1, arr2[1]).sort((a,b) => a - b)[arr2[2]-1];

function solution(array, commands) {
  let answer = [];
  commands.forEach(element => {
    answer.push(findNum(array, element));
  })
  return answer;
}