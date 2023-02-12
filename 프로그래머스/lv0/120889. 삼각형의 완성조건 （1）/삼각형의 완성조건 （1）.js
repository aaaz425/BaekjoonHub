function solution(sides) {
  const max = Math.max(...sides);
  const sum = sides.reduce((acc, cur) => acc + cur, 0)
  const answer = sum - max > max ? 1 : 2;
  return answer
}