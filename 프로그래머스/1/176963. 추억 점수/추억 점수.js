function solution(name, yearning, photo) {
    return photo.map((arr) => {
        return arr.reduce((acc, cur) => {
            if (name.includes(cur)) {
                return acc + yearning[name.indexOf(cur)];
            }
            
            return acc;
        }, 0)
    })
}