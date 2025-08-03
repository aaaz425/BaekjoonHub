function solution(skill, skill_trees) {
    let count = 0;

    for (const tree of skill_trees) {
      let filtered = [...tree].filter(s => skill.includes(s)).join('');
      if (skill.startsWith(filtered)) {
        count++;
      }
    }

    return count;
}
