function solution(lines) {
    const flatLines = lines.map(([start, end]) => 
             Array.from({length: end - start}, (_, i) => i + start + 0.5)
            ).flat();
    const dupLines = flatLines.filter(val => {
        if (flatLines.filter(value => val === value).length > 1) {
            return true;
        }
    });

    return [...new Set(dupLines)].length;
}