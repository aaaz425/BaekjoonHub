function solution(picks, minerals) {
  const totalPicks = picks.reduce((a, b) => a + b, 0);

  minerals = minerals.slice(0, totalPicks * 5);

  const groups = [];

  for (let i = 0; i < minerals.length; i += 5) {
    const group = minerals.slice(i, i + 5);

    let diamond = 0;
    let iron = 0;
    let stone = 0;

    for (const mineral of group) {
      if (mineral === "diamond") diamond++;
      else if (mineral === "iron") iron++;
      else stone++;
    }

    const score = diamond * 25 + iron * 5 + stone;

    groups.push({
      diamond,
      iron,
      stone,
      score,
    });
  }

  groups.sort((a, b) => b.score - a.score);

  let answer = 0;

  for (const group of groups) {
    if (picks[0] > 0) {
      picks[0]--;

      answer += group.diamond + group.iron + group.stone;
    }

    else if (picks[1] > 0) {
      picks[1]--;

      answer += group.diamond * 5 + group.iron + group.stone;
    }

    else if (picks[2] > 0) {
      picks[2]--;

      answer += group.diamond * 25 + group.iron * 5 + group.stone;
    }
  }

  return answer;
}