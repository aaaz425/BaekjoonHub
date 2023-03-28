function solution(spell, dic) {
    return dic
        .filter((v) => v.length === spell.length)
        .map((v) => [...v].sort().join(""))
        .indexOf(spell.sort().join("")) !== -1 ? 1 : 2;
}