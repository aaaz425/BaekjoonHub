function solution(picture, k) {
    const doubledPicture = [];
    
    const widthDoubledPicture = picture.map((line) => {
        return [...line]
            .map((pixel) => pixel.repeat(k))
            .reduce((acc, cur) => acc + cur, "");
    });
    
    widthDoubledPicture.forEach((line) => {
        for (let i = 0; i < k; i++) {
            doubledPicture.push(line);
        }
    });
    
    return doubledPicture;
}