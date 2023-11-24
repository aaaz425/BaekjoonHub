function solution(score) {
    const average = score.map((value) => value.reduce((acc, cur) => acc + cur, 0) / 2);
    const sortedAverage = [...average].sort((a, b) => b - a);

    return average.map(score => sortedAverage.findIndex((rankedScore) => rankedScore === score) + 1);
}