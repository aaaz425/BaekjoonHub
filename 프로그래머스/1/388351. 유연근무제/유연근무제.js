function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for (let i = 0; i < schedules.length; i++) {
        const limit = addTenMinutes(schedules[i]);
        let isSuccess = true;
        
        for (let j = 0; j < 7; j++) {
            const day = ((startday - 1 + j) % 7) + 1;
            
            // 토요일(6), 일요일(7)은 제외
            if (day === 6 || day === 7) continue;
            
            if (timelogs[i][j] > limit) {
                isSuccess = false;
                break;
            }
        }
        
        if (isSuccess) answer++;
    }
    
    return answer;
}

function addTenMinutes(time) {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    
    minute += 10;
    
    if (minute >= 60) {
        hour += 1;
        minute -= 60;
    }
    
    return hour * 100 + minute;
}