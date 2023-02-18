function solution(cipher, code) {
    let answer = [];
    for (let i = 0; i < cipher.length + 1; i++) {
        i % code === 0 ? answer.push(cipher[i-1]) : null;
    }
    return answer.join('')
}