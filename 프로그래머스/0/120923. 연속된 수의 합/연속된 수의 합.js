function solution(num, total) {
    const middle = num % 2 === 0 ? Math.ceil(total / num) : total / num;
    const distance = num % 2 === 0 ? num / 2 : Math.floor(num / 2);
    const start = middle - distance;
    
    return Array.from({length: num}, (_, i) => i + start);
}