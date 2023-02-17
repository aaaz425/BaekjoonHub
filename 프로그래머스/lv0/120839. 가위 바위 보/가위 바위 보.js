function solution(rsp) {
  return [...rsp].map((element) => 
    element == 0 ? element = 5 :
    element == 2 ? element = 0 :
    2).join('');
}