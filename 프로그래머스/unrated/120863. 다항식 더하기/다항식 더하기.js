function solution(polynomial) {
    let variable = 0;
    let num = 0;
    
    polynomial.split(" + ").forEach(term => {
        if (term.includes('x')) {
            const x = term.indexOf('x');
            variable += term.substring(0, x) ? +term.substring(0, x) : 1;
        } else {
            num += +term;
        }
    });
 
    if (variable === 1 && !num) {
        return 'x';
    }
    
    if (variable && !num) {
        return `${variable}x`;
    }
    
    if (!variable && num) {
        return num.toString();
    }
    
    if (variable === 1) {
        return `x + ${num}`;
    }
    
    return `${variable}x + ${num}`;
}