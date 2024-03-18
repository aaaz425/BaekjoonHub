function solution(strings, n) {
    const char = 'abcdefghijklmnopqrstuvwxyz';
    
    return strings.sort((a, b) => {
        if (a[n] !== b[n]) {
            return char.indexOf(a[n]) - char.indexOf(b[n])    
        }
        
        return a.localeCompare(b);
    });
}