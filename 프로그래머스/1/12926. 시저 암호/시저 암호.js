function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    return [...s].map(char => {
        if (char === " ") {
            return " ";
        }

        const isUpperCase = char === char.toUpperCase();
        const source = isUpperCase ? upper : lower;

        const charIndex = (source.indexOf(char) + n) % source.length;

        return source[charIndex];
    }).join("");
}