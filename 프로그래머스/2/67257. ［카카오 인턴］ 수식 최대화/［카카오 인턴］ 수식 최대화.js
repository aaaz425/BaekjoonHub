function solution(expression) {
  const operators = ['+', '-', '*'];
  const priorities = getPermutations(operators, 3);

  const tokens = expression.split(/(\D)/);

  let answer = 0;

  for (const priority of priorities) {
    let temp = [...tokens];

    for (const op of priority) {
      const stack = [];

      let i = 0;

      while (i < temp.length) {
        const cur = temp[i];

        if (cur === op) {
          const prev = Number(stack.pop());
          const next = Number(temp[++i]);

          stack.push(calculate(prev, next, op));
        } else {
          stack.push(cur);
        }

        i++;
      }

      temp = stack;
    }

    answer = Math.max(answer, Math.abs(Number(temp[0])));
  }

  return answer;
}

function calculate(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  return a * b;
}

function getPermutations(arr, select) {
  if (select === 1) return arr.map(v => [v]);

  const result = [];

  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];

    const perms = getPermutations(rest, select - 1);

    perms.forEach(p => {
      result.push([fixed, ...p]);
    });
  });

  return result;
}