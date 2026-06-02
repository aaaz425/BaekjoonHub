function solution(m, musicinfos) {
    const convert = (str) => {
        return str
            .replaceAll("C#", "c")
            .replaceAll("D#", "d")
            .replaceAll("F#", "f")
            .replaceAll("G#", "g")
            .replaceAll("A#", "a");
    };

    const melody = convert(m);

    let answer = "(None)";
    let maxTime = -1;

    for (const info of musicinfos) {
        const [start, end, title, sheetInfo] = info.split(",");

        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);

        const playTime = (eh * 60 + em) - (sh * 60 + sm);

        const sheet = convert(sheetInfo);

        let played = "";

        for (let i = 0; i < playTime; i++) {
            played += sheet[i % sheet.length];
        }

        if (played.includes(melody)) {
            if (playTime > maxTime) {
                maxTime = playTime;
                answer = title;
            }
        }
    }

    return answer;
}