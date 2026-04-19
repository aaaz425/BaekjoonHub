function solution(fees, records) {
    const [st, sf, ut, uf] = fees;
    const obj = {};
    
    records.forEach(record => {
        const [time, car, history] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        
        if (!obj[car]) {
            obj[car] = {
                'cur': hour * 60 + minute,
                'total': 0,
                'history': 'IN',
            }
        } else {
            if (history === 'IN') {
                obj[car]['cur'] = hour * 60 + minute;
            } else {
                obj[car]['total'] += hour * 60 + minute - obj[car]['cur'];
                obj[car]['cur'] = 0;
            }
            obj[car]['history'] = history;
        }
    });
    
    const answer = [];

    for (const [key, _] of Object.entries(obj)) {
        if (obj[key]['history'] === 'IN') {
            obj[key]['total'] += 23 * 60 + 59 - obj[key]['cur'];
        }
        answer.push([key, obj[key]['total'] > st ? sf + Math.ceil((obj[key]['total'] - st) / ut) * uf : sf]);
    }
    
    return answer.sort((a, b) => +a[0] - +b[0]).map(v => v[1]);
}