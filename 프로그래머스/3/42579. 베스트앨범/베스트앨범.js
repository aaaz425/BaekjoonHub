function solution(genres, plays) {
    const genreMap = new Map();

    genres.forEach((genre, index) => {
        if (!genreMap.has(genre)) {
            genreMap.set(genre, {
                total: 0,
                songs: [],
            });
        }

        const genreInfo = genreMap.get(genre);

        genreInfo.total += plays[index];
        genreInfo.songs.push({
            index,
            play: plays[index],
        });
    });

    return [...genreMap.values()]
        .sort((a, b) => b.total - a.total)
        .flatMap(({ songs }) =>
            songs
                .sort((a, b) => b.play - a.play || a.index - b.index)
                .slice(0, 2)
                .map(song => song.index)
        );
}