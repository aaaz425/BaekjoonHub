function solution(angle) {
    const isAcute = angle < 90;
    const isRight = angle === 90;
    const isObtuse = angle > 90 && angle < 180;
    const isSquare = angle === 180;
    
    switch(true) {
        case isAcute:
            return 1;
        case isRight:
            return 2;
        case isObtuse:
            return 3;
        case isSquare:
            return 4;
        default:
            return;
    }
}