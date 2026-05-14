function solution(numbers) {
    return numbers.map((num) => {
        const x = BigInt(num);

        if (x % 2n === 0n) {
            return Number(x + 1n);
        }

        const result = x + 1n + ((x ^ (x + 1n)) >> 2n);

        return Number(result);
    });
}