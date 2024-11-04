function solution(participant, completion) {
    const hash = {};
    participant.forEach(name => {
        if (!hash[name]) {
            hash[name] = 1;
        } else {
            hash[name]++;
        }
    })
    completion.forEach(name => {
        hash[name]--;
        if (!hash[name]) {
            delete hash[name];
        }
    })
    return Object.keys(hash)[0];
}