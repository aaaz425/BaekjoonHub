function solution(price, money, count) {
    while(count) {
        money -= count * price;
        count--;
    }
    return money >= 0 ? 0 : -money;
}