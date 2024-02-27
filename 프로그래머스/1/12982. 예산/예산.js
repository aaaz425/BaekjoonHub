function solution(d, budget) {
    return d.sort((a, b) => a - b)
            .reduce((acc, cur) => {
                if (budget >= cur) {
                    budget -= cur;
                    return acc + 1;
                } else {
                    return acc;
                }
            }, 0)
}