function solution(hp) {
    let answer = 0;
    let totalDamage = 0;
    let lastHp = hp;
    for (let i = 5; i > 0 ; i -= 2) {
        totalDamage = Math.floor(lastHp / i);
        answer += totalDamage;
        lastHp = lastHp - totalDamage * i;
    }
    return answer;
}