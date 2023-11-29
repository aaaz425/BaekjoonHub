function solution(s) {
    let answer = s;
    const charOfNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    charOfNum.forEach((char, index) => {
        answer = answer.replaceAll(char, index);
    })
    
    return +answer;
}