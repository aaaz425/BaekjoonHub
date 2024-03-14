function solution(dots) {
    const dotsIndexes = [0, 1, 2, 3];
    let isPossible = false;
    
    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const [x1, y1] = dots[i];
            const [x2, y2] = dots[j];
            
            const [dot3, dot4] = dotsIndexes.filter(val => val !== i && val !== j);
            const [x3, y3] = dots[dot3];
            const [x4, y4] = dots[dot4];
            
            const inclinationA = (y2 - y1) / (x2 - x1);
            const inclinationB = (y4 - y3) / (x4 - x3);
            
            if (inclinationA === inclinationB) {
                isPossible = true;
                break;
            }    
        }
        
        if (isPossible) break;
    }
    
    return isPossible ? 1 : 0;
}