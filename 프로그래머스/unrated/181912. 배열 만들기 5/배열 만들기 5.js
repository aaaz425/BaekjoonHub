function solution(intStrs, k, s, l) {
    return intStrs.map(value => {
        return +(value.slice(s, s + l))
    }).filter(value => value > k)
}