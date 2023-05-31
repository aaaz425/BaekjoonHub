function solution(myString) {   
    return [...myString].map(value => {
        return value < 'l' ? 'l' : value;
    }).join('')
}