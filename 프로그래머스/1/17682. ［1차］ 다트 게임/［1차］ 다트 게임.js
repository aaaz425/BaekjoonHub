function solution(dartResult) {
    let scores = [];
    let i = 0;

    while (i < dartResult.length) {
        let num = 0;

        if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
            num = 10;
            i += 2;
        } else {
            num = Number(dartResult[i]);
            i++;
        }

        let bonus = dartResult[i];
        if (bonus === 'S') num = Math.pow(num, 1);
        else if (bonus === 'D') num = Math.pow(num, 2);
        else if (bonus === 'T') num = Math.pow(num, 3);
        i++;

        if (dartResult[i] === '*' || dartResult[i] === '#') {
            if (dartResult[i] === '*') {
                num *= 2;
                if (scores.length > 0) scores[scores.length - 1] *= 2;
            } else if (dartResult[i] === '#') {
                num *= -1;
            }
            i++;
        }

        scores.push(num);
    }

    return scores.reduce((a, b) => a + b, 0);
}
