function solution(msg) {
    const dict = new Map();

    for (let i = 0; i < 26; i++) {
        dict.set(String.fromCharCode(65 + i), i + 1);
    }

    let answer = [];
    let index = 27;
    let i = 0;

    while (i < msg.length) {
        let w = msg[i];
        let j = i + 1;

        while (j <= msg.length && dict.has(msg.slice(i, j))) {
            w = msg.slice(i, j);
            j++;
        }

        answer.push(dict.get(w));

        if (j <= msg.length) {
            const newWord = msg.slice(i, j);
            dict.set(newWord, index++);
        }

        i += w.length;
    }

    return answer;
}