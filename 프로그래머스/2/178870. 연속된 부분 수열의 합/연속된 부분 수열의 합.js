function solution(sequence, k) {
  let left = 0;
  let sum = 0;
  let answer = [0, sequence.length - 1];

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      const curLen = right - left;
      const answerLen = answer[1] - answer[0];

      if (curLen < answerLen) {
        answer = [left, right];
      }
    }
  }

  return answer;
}