function solution(priorities, location) {
    // 찾아야 하는 위치의 우선순위
    const targetP = priorities[location];
    // 각 우선순위의 요소의 갯수를 담을 배열
    const countP = Array(10).fill(0);
    
    // 각 우선순위의 갯수를 카운트
    priorities.forEach(p => countP[p]++);
    
    // 현재 실행횟수
    let answer = 0;
    // 큐의 시작 인덱스
    let front = 0;
    // 큐의 끝 인덱스
    let rear = priorities.length - 1;
    // 우선순위큐
    const Q = [...priorities, ...Array(10000).fill(0)];
    
    // 현재 탐색중인 우선순위
    let i = 9;
    
    // 우선순위는 1까지만 탐색
    while (i > 0) {
        // 만약 현재 탐색중인 우선순위가 큐에 없다면
        if (!countP[i]) {
            // 탐색할 우선순위를 1 줄이고 다음 반복문 실행
            i--;
            continue;
        }
        
        // 만약 찾아야하는 인덱스가 탐색중인 인덱스이면
        if (Q[front] === i) {
            // 실행횟수 1 증가
            answer++;
            countP[i]--;
            
            // 현재 보고 있는 큐의 값이 탐색중인 인덱스이면 실행횟수 반환
            if (front === location) {
                return answer;
            }
        }
        
        // 끝 인덱스 증가
        rear++;
        // 만약 찾아야 하는 위치를 봤을 때 현재 우선순위가 아니라면 Q의 끝으로 이동
        if (location === front) {
            location = rear;
        }
        Q[rear] = Q[front];
        // 시작 인덱스 증가
        front++;
    }
}