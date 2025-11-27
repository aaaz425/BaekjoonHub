function solution(tickets) {
    const obj = {};

    // 그래프 구성하기
    for (const [from, to] of tickets) {
        if (!obj[from]) {
            obj[from] = [];
        }
        
        obj[from].push(to);
    }

    // 알파벳순 정렬
    for (const key in obj) {
        obj[key].sort();
    }

    const answer = [];
    const route = ["ICN"]; // 항상 인천 공항에서 출발

    const dfs = (airport) => {
        // 종료 조건 -> 경로의 길이가 총 티켓의 수 + 1일 때 (인천 공항 포함)
        if (route.length === tickets.length + 1) {
            answer.push([...route]);
            return;
        }

        if (!obj[airport] || obj[airport].length === 0) {
            return;
        }

        for (let i = 0; i < obj[airport].length; i++) {
            const next = obj[airport][i];
            obj[airport].splice(i, 1); // 티켓 사용
            route.push(next);

            if (dfs(next)) {
                return true;
            }

            // 백트래킹
            route.pop();
            obj[airport].splice(i, 0, next);
        }

        return false;
    }

    dfs("ICN");
    return answer[0];
}