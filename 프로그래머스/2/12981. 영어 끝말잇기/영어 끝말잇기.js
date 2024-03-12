function solution(n, words) {
    const answer = [];
    
    words.forEach((word, index) => {
        if (index === 0 || answer.length) return;
        
        const endWord = words[index - 1].at(-1);
        const startWord = word[0];
        
        if (endWord !== startWord) {
            const num = index % n + 1;
            const order = index % n === 0 ? Math.ceil(index + 1 / n) : Math.ceil(index / n);
            
            answer.push(num);
            answer.push(order);
            return;
        }
        
        const isDuplicated = words.slice(0, index).indexOf(word) !== -1;
        
        if (isDuplicated) {
            const num = index % n + 1;
            const order = Math.floor(index / n) + 1;
            
            answer.push(num);
            answer.push(order);
            return;
        }
    })
    
    if (!answer.length) {
        answer.push(0);
        answer.push(0);
    }
    
    return answer;
}