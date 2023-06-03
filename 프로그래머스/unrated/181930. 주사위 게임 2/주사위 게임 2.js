function solution(a, b, c) {
    let newSet = [...new Set([a, b, c])];
    switch(newSet.length) {
        case 1:
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
        case 2:
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
        case 3:
            return a + b + c;
    }
}