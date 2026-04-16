function solution(arrayA, arrayB) {
  const gcd = (a, b) => {
    while (b !== 0) {
      const temp = a % b;
      a = b;
      b = temp;
    }
    return a;
  };

  const getGcdOfArray = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = gcd(result, arr[i]);
    }
    return result;
  };

  const canUse = (divisor, otherArr) => {
    return otherArr.every(num => num % divisor !== 0);
  };

  const gcdA = getGcdOfArray(arrayA);
  const gcdB = getGcdOfArray(arrayB);

  let answer = 0;

  if (canUse(gcdA, arrayB)) answer = Math.max(answer, gcdA);
  if (canUse(gcdB, arrayA)) answer = Math.max(answer, gcdB);

  return answer;
}