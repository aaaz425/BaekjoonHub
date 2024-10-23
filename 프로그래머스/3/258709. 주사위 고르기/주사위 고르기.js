function solution(dice) {
  const n = dice.length; // 총 주사위 개수
  const halfN = n / 2; // 각 플레이어가 가져갈 주사위 개수

  // 특정 조합에서의 합계를 계산하는 함수
  const calculateSums = (indices) => {
    const sums = []; // 합계를 저장할 배열

    // DFS를 통해 모든 주사위 조합의 합계를 계산
    const dfs = (sum, depth) => {
      if (depth === indices.length) {
        sums.push(sum); // 모든 주사위를 사용했을 때 합계를 저장
        return;
      }
      for (const face of dice[indices[depth]]) {
        dfs(sum + face, depth + 1); // 현재 주사위의 각 면을 더하고 다음 주사위로 이동
      }
    };
    dfs(0, 0); // 초기 호출
    return sums; // 계산된 합계 배열 반환
  };

  // 두 조합을 비교하여 A가 승리할 횟수를 계산하는 함수
  const calculateWins = (aSums, bSums) => {
    let wins = 0; // A의 승리 횟수 초기화
    bSums.sort((a, b) => a - b); // B의 합계를 오름차순으로 정렬

    // A의 합에 대해 B의 합을 비교
    for (const aSum of aSums) {
      let left = 0, right = bSums.length;
      // 이진 탐색을 통해 A의 합보다 작은 B의 합의 개수를 계산
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (bSums[mid] < aSum) {
          left = mid + 1; // B의 합이 A의 합보다 작으면 왼쪽 포인터 이동
        } else {
          right = mid; // B의 합이 A의 합보다 크거나 같으면 오른쪽 포인터 이동
        }
      }
      wins += left; // 현재 A의 합보다 작은 B의 합의 개수를 추가
    }
    return wins; // 계산된 승리 횟수 반환
  };

  // 가능한 모든 A 조합을 탐색하는 함수
  let maxWins = 0; // 최대 승리 횟수 초기화
  let bestCombination = []; // 최적의 조합 저장

  const selectCombinations = (start, aIndices, bIndices) => {
    // A와 B의 주사위 인덱스를 각각 저장하는 배열

    // A와 B가 각각 반씩 주사위를 선택했을 때
    if (aIndices.length === halfN && bIndices.length === halfN) {
      const aSums = calculateSums(aIndices); // A의 합계 계산
      const bSums = calculateSums(bIndices); // B의 합계 계산
      const wins = calculateWins(aSums, bSums); // 승리 횟수 계산

      // 현재 조합의 승리 횟수가 최대 승리 횟수보다 크면 업데이트
      if (wins > maxWins) {
        maxWins = wins;
        bestCombination = [...aIndices]; // 최적의 조합 업데이트
      }
      return;
    }

    // A가 더 주사위를 선택할 수 있는 경우
    if (aIndices.length < halfN) {
      selectCombinations(start + 1, [...aIndices, start], bIndices); // A에 현재 인덱스를 추가
    }
    // B가 더 주사위를 선택할 수 있는 경우
    if (bIndices.length < halfN) {
      selectCombinations(start + 1, aIndices, [...bIndices, start]); // B에 현재 인덱스를 추가
    }
  };

  selectCombinations(0, [], []); // 조합 선택 시작
  return bestCombination.map(i => i + 1); // 결과를 1-based 인덱스로 변환 후 정렬하여 반환
}
