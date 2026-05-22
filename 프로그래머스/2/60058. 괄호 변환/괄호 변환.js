function solution(p) {
  function isCorrect(str) {
    let stack = 0;

    for (const ch of str) {
      if (ch === "(") {
        stack++;
      } else {
        stack--;

        if (stack < 0) return false;
      }
    }

    return stack === 0;
  }

  function convert(w) {
    if (w === "") return "";

    let balance = 0;
    let idx = 0;

    for (let i = 0; i < w.length; i++) {
      if (w[i] === "(") balance++;
      else balance--;

      if (balance === 0) {
        idx = i;
        break;
      }
    }

    const u = w.slice(0, idx + 1);
    const v = w.slice(idx + 1);

    if (isCorrect(u)) {
      return u + convert(v);
    }

    let result = "(";
    result += convert(v);
    result += ")";

    let reversed = "";

    for (let i = 1; i < u.length - 1; i++) {
      reversed += u[i] === "(" ? ")" : "(";
    }

    return result + reversed;
  }

  return convert(p);
}