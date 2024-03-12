function solution(a, b, c, d) {
    const set = [...new Set([a, b, c, d])];
    
    if (set.length === 1) {
        return 1111 * a;
    } else if (set.length === 2) {
        const [p, q] = set;
        const pCount = [a, b, c, d].filter(v => v === p).length;
        const qCount = [a, b, c, d].filter(v => v === q).length;
        
        if (pCount === qCount) {
            return (p + q) * Math.abs(p - q);
        }
        
        return pCount > qCount ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2);
    } else if (set.length === 3) {
        if (a === b) {
            return c * d;
        } else if (a === c) {
            return b * d;
        } else if (a === d) {
            return b * c;
        } else if (b === c) {
            return a * d;
        } else if (b === d) {
            return a * c;
        } else if (c === d) {
            return a * b;
        }
    } else {
        return Math.min(...set);
    }
}