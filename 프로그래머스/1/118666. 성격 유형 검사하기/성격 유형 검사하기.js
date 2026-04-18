function solution(survey, choices) {
    let answer = '';
    const dict = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    }
    
    survey.forEach((v, i) => {
        const [a, b] = v.split('');
        if (choices[i] < 4) {
            dict[a] += Math.abs(4 - choices[i]);
        } else if (choices[i] > 4) {
            dict[b] += Math.abs(choices[i] - 4);
        }
    })
    
    
    answer += dict['R'] >= dict['T'] ? 'R' : 'T';
    answer += dict['C'] >= dict['F'] ? 'C' : 'F';
    answer += dict['J'] >= dict['M'] ? 'J' : 'M';
    answer += dict['A'] >= dict['N'] ? 'A' : 'N';
    
    return answer;
}