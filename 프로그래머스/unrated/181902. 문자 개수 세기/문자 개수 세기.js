function solution(my_string) {
    const bigChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const smallChar = bigChar.map(char => char.toLowerCase());
    const charArr = [...bigChar, ...smallChar];
    return Array.from({length: charArr.length}, (_,i) => 0).map((count, idx) => {
        return [...my_string].filter(value => value === charArr[idx]).length;
    })
}