function solution(scores) {
  const [wanhoA, wanhoB] = scores[0];
  const wanhoSum = wanhoA + wanhoB;

  scores.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a[1] - b[1];
  });

  let maxPeer = 0;
  let rank = 1;

  for (const [a, b] of scores) {
    if (b < maxPeer) {
      if (a === wanhoA && b === wanhoB) {
        return -1;
      }
      continue;
    }

    maxPeer = Math.max(maxPeer, b);

    if (a + b > wanhoSum) {
      rank++;
    }
  }

  return rank;
}