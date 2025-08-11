function solution(genres, plays) {
    const genreMap = {};
    const genreTotal = {};

    genres.forEach((genre, index) => {
        const play = plays[index];
        if (!genreMap[genre]) genreMap[genre] = [];
        genreMap[genre].push({ index, play });

        genreTotal[genre] = (genreTotal[genre] || 0) + play;
    });

    const sortedGenres = Object.keys(genreTotal)
        .sort((a, b) => genreTotal[b] - genreTotal[a]);

    const result = [];

    sortedGenres.forEach(genre => {
        const songs = genreMap[genre]
            .sort((a, b) => b.play - a.play || a.index - b.index)
            .slice(0, 2);

        songs.forEach(song => result.push(song.index));
    });

    return result;
}