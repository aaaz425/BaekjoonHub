function solution(people, limit) {
    let answer = 0;
    const sortedPeople = people.sort((a, b) => a - b);
    
    while(sortedPeople.length > 0) {
        const thin = sortedPeople[0];
        const fat = sortedPeople[sortedPeople.length - 1];
        
        if (thin + fat <= limit) {
            sortedPeople.pop();
            sortedPeople.shift();
            answer++;
        } else {
            sortedPeople.pop();
            answer++;
        }
    }
    
    return answer;
}