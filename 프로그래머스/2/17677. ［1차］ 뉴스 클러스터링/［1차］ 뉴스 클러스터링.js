function solution(str1, str2) {
    function getBigrams(s) {
        const result = [];
        s = s.toLowerCase();

        for (let i = 0; i < s.length - 1; i++) {
            const pair = s.slice(i, i + 2);
            if (pair.match(/^[a-z]{2}$/)) {
                result.push(pair);
            }
        }

        return result;
    }

    const A = getBigrams(str1);
    const B = getBigrams(str2);

    const mapA = new Map();
    const mapB = new Map();

    for (const word of A) {
        mapA.set(word, (mapA.get(word) || 0) + 1);
    }

    for (const word of B) {
        mapB.set(word, (mapB.get(word) || 0) + 1);
    }

    let inter = 0;
    let union = 0;

    const allKeys = new Set([...mapA.keys(), ...mapB.keys()]);

    for (const key of allKeys) {
        const countA = mapA.get(key) || 0;
        const countB = mapB.get(key) || 0;
        inter += Math.min(countA, countB);
        union += Math.max(countA, countB);
    }

    const similarity = union === 0 ? 1 : inter / union;
    return Math.floor(similarity * 65536);
}
