function solution(food) {
    const answer = [];
    const [water, ...realFood] = food;
    
    realFood.reverse().forEach((val, idx) => {
        for (let i = 0; i < Math.floor(val / 2); i++) {
            answer.unshift(realFood.length - idx);
            answer.push(realFood.length - idx);
        }
    });
    
    answer.splice(answer.length / 2, 0, 0);
    
    return answer.join('');
}