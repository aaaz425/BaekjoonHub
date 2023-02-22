function solution(s) {
    return s.split(' ')
        .sort((a,b) => a-b)
        .filter((v, i) => i === 0 || i === s.split(' ').length - 1)
        .join(' ');
}