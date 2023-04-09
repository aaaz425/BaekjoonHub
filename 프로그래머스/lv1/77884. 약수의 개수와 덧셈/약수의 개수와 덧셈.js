function measure(num) {
    const measureList = [1];
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            measureList.push(i);
        }
    }
    return measureList.length;
}

function solution(left, right) {
    let answer = 0;
    Array.from({length : right - left + 1}, (_, i) => i + left)
    .forEach(value => {
        measure(value) % 2 === 0 ? answer += value : answer -= value;
    });
    return answer;
}