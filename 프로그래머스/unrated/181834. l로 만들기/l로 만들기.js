function solution(myString) {
    const letters = [
        'a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
    ];
    
    return [...myString].map(value => {
        return letters.indexOf(value) < letters.indexOf('l') ? 'l' : value;
    }).join('')
}