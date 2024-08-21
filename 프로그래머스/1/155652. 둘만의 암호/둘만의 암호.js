function solution(s, skip, index) {
    let answer = '';
    const charSet = 'abcdefghijklmnopqrstuvwxyz';
    const charArr = charSet.split('')
                            .filter(v => skip.indexOf(v) == -1);
    
    for (let i = 0; i < s.length; i++) {
        const targetIdx = charArr.indexOf(s[i]);
        answer += charArr[(targetIdx + index) % charArr.length]
    }
    
    return answer;
}