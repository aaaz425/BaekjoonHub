function solution(n) {
  let result = [];
  let i = 2;
  
  while (n >= 2) {
    if (n % i === 0) {
      result.push(i)
      n = n / i;
    }
    
     else i++;
    
  }
  
  return [...new Set(result)];
}