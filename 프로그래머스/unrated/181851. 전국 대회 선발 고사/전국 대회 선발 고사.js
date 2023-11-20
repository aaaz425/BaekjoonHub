function solution(rank, attendance) {
    const ranking = rank.map((score, index) => {
        return {
            score: score,
            index: index
        }
    });
    const attendableRank = ranking.filter((_, index) => attendance[index]);
    const sortedRank = attendableRank.sort((a, b) => a.score - b.score);
    const [a, b, c] = sortedRank.slice(0, 3);
    
    return (10000 * a.index) + (100 * b.index) + c.index;
}