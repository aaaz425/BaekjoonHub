function solution(sizes) {
    const newSizes = sizes.map(size => {
        return size.sort((a, b) => b - a);
    })
    
    const frontSizes = newSizes.map(size => size[0]);
    const backSizes = newSizes.map(size => size[1]);
    
    const xMax = Math.max(...frontSizes);
    const yMax = Math.max(...backSizes);
    
    return xMax * yMax;
}