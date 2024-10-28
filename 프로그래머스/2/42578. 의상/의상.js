function solution(clothes) {
    const obj = {};
    clothes.forEach(([v, k]) => {
        if (!obj[k]) {
            obj[k] = [v];
        } else {
            obj[k].push(v);
        }
    })
    
    if (Object.keys(obj).length === 1) {
        return Object.values(obj)[0].length;
    }
    
    let cases = [];
    for (const key in obj) {
        cases.push(obj[key].length + 1);
    }
    return cases.reduce((acc, cur) => acc * cur, 1) - 1;
}