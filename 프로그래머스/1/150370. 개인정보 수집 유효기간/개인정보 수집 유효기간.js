function solution(today, terms, privacies) {
    const answer = [];
    const map = new Map();
    const [year, month, day] = today.split('.').map(Number);
    const calToday = year * 12 * 28 + month * 28 + day;
    
    terms.forEach(term => {
        const [a, b] = term.split(' ');
        
        map.set(a, +b);
    })
    
    privacies.forEach((privacy, i) => {
        const [time, type] = privacy.split(' ');
        const [yy, mm, dd] = time.split('.').map(Number);
        const calDay = yy * 12 * 28 + mm * 28 + dd + map.get(type) * 28;
        
        if (calToday >= calDay) {
            answer.push(i + 1);
        }
    })
    
    return answer;
}