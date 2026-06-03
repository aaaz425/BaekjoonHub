function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;

    let hp = health;
    let combo = 0;

    let attackIdx = 0;
    const lastTime = attacks[attacks.length - 1][0];

    for (let time = 1; time <= lastTime; time++) {
        if (
            attackIdx < attacks.length &&
            attacks[attackIdx][0] === time
        ) {
            hp -= attacks[attackIdx][1];
            combo = 0;
            attackIdx++;

            if (hp <= 0) return -1;
        } else {
            combo++;
            hp = Math.min(health, hp + x);

            if (combo % t === 0) {
                hp = Math.min(health, hp + y);
            }
        }
    }

    return hp;
}