function solution(keymap, targets) {
    const charMap = new Map();

    keymap.forEach((key, idx) => {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1;

            if (!charMap.has(char) || charMap.get(char) > pressCount) {
                charMap.set(char, pressCount);
            }
        }
    });

    const result = targets.map(word => {
        let total = 0;
        for (const char of word) {
            if (!charMap.has(char)) return -1;
            total += charMap.get(char);
        }
        return total;
    });

    return result;
}
