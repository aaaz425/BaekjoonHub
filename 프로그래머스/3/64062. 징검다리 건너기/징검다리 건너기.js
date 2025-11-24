function solution(stones, k) {
    let left = 1;
    
    let right = 0;
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] > right) right = stones[i];
    }

    const canCross = (mid) => {
        let cnt = 0;
        for (let s of stones) {
            if (s - mid < 0) {
                cnt++;
                if (cnt >= k) return false;
            } else {
                cnt = 0;
            }
        }
        return true;
    };

    let answer = 0;

    while (left <= right) {
        const mid = (left + right) >> 1;

        if (canCross(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}