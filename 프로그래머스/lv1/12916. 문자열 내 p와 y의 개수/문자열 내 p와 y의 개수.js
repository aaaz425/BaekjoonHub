function solution(s){
    return [...s].filter(v => v === 'p' || v === 'P').length === [...s].filter(v => v === 'y' || v === 'Y').length ? true : false;
}