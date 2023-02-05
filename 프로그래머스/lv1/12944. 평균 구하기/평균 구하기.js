function solution(arr) {
    var answer = 0;
    arr.forEach(element => answer += element);
    return answer / arr.length;
}