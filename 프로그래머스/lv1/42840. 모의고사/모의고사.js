function score(arr1, arr2) {
  let i = 0;
  let correct = 0;
  arr1.forEach(element => {
    element === arr2[i % arr2.length] ? correct += 1 : correct;
    i++;
  });
  return correct;
}

function message(num1, num2, num3) {
  return num1 === num2 && num1 === num3 ? [1, 2, 3] : 
  num1 === num2 && num1 > num3 ? [1, 2] : 
  num1 === num3 && num1 > num2 ? [1, 3] : 
  num2 === num3 && num2 > num1 ? [2, 3] : 
  num1 > num2 && num1 > num3 ? [1] : 
  num2 > num1 && num2 > num3 ? [2] : 
  [3];
}

function solution(answers) {
  const pam1 = [1,2,3,4,5];
  const pam2 = [2,1,2,3,2,4,2,5];
  const pam3 = [3,3,1,1,2,2,4,4,5,5];
  const score1 = score(answers, pam1);
  const score2 = score(answers, pam2);
  const score3 = score(answers, pam3);
  return message(score1, score2, score3);
}