function solution(n, k) {
    const converted = n.toString(k);
    const candidates = converted.split('0');
    let count = 0;

    for (const numStr of candidates) {
        if (numStr === '') continue;

        const num = Number(numStr);

        if (isPrime(num)) count++;
    }

    return count;
}

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}