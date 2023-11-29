function solution(s) {
    const charOfNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    charOfNum.forEach((char, index) => {
        s = s.replaceAll(char, index);
    })
    
    return +s;
}