function solution(n) {
    let lcm = 1;
    while(true){
      if(lcm * 6 % n === 0) {
        break;
      }
      lcm++;
    }
  	return lcm
}