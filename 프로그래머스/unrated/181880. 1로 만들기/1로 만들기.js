function solution(num_list) {
    let count = 0;
    
    num_list.forEach(value => {
        while(value !== 1) {
            value = value % 2 === 1 ? (value - 1) / 2 : value / 2;
            count++;
        }
    })
    
    return count;
}
