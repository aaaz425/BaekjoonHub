function solution(files) {
    const isDigit = (c) => c >= '0' && c <= '9';
    const parsed = files.map((file, idx) => {
        let i = 0;

        while (i < file.length && !isDigit(file[i])) i++;

        const head = file.slice(0, i);

        let j = i;
        while (j < file.length && isDigit(file[j]) && j - i < 5) j++;

        const number = file.slice(i, j);

        return {
                original: file,
                head: head.toLowerCase(),
                number: Number(number),
                idx
            };
    });

    parsed.sort((a, b) => {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        }

        if (a.number !== b.number) {
            return a.number - b.number;
        }

        return a.idx - b.idx;
    });

    return parsed.map(v => v.original);
}