function solution(cipher, code) {
    let answer = [];
    for (let i = 0; i < cipher.length + 1; i++) {
        i % code === 0 ? answer.push(cipher[i-1]) : null;
    }
    return answer.join('')
}

// filter 활용법
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}
