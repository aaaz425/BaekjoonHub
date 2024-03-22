function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016-${a.length === 1 ? `0${a}` : a}-${b.length === 1 ? `0${b}` : b}`)
    
    return day[date.getDay()];
}