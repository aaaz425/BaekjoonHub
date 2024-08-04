function solution(babbling) {
    const possible = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let babble = '';
        let temp = '';
        
        if (possible.some((v) => babbling[i].includes(v.repeat(2)))) {
            continue;
        }
        
        for (let j = 0; j < babbling[i].length; j++) {
            if (!possible.some((v) => v.includes(babble))) {
                babble = '';
                break;
            } else {
                babble += babbling[i][j];
            }
            
            if (possible.includes(babble)) {
                temp += babble;
                babble = '';
            }
        }
        
        if (temp === babbling[i]) {
            answer++;
        }
    }
    
    return answer;
}