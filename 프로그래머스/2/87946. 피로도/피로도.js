function solution(k, dungeons) {
    let maxCount = 0;

    function getPermutations(arr, n) {
        if (n === 1) return arr.map((el) => [el]);

        const result = [];

        arr.forEach((fixed, idx, origin) => {
            const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
            const perms = getPermutations(rest, n - 1);
            const attached = perms.map((perm) => [fixed, ...perm]);
            result.push(...attached);
        });

        return result;
    }

    const permutations = getPermutations(dungeons, dungeons.length);

    permutations.forEach((order) => {
        let stamina = k;
        let count = 0;

        for (const [minReq, consume] of order) {
            if (stamina >= minReq) {
                stamina -= consume;
                count++;
            } else {
                break;
            }
        }

        maxCount = Math.max(maxCount, count);
    });

    return maxCount;
}