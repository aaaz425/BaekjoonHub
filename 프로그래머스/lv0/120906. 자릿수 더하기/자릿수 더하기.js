function solution(n) {
    var answer = 0;
    const arr = String(n).split('').map((num)=>{
      return Number(num)
    });
    answer = arr.reduce((acc, cur) => acc + cur, 0);
    return answer;
}