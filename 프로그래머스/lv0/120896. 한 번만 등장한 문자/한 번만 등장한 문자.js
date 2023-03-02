function solution(s) {
    const arr = s.split('').sort()
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).join('');
}