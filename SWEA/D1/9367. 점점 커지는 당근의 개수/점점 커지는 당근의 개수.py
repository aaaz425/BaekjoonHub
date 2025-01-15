T = int(input())

for tc in range(1, T + 1):
    N = int(input())        # 당근의 개수
    carrots = list(map(int, input().split()))
    sequence_cnt = 0        # 연속으로 커진 당근의 최대 개수
    cur_cnt = 1             # 이번 구간의 연속으로 커진 당근의 개수: 최소 길이는 1

    for i in range(N - 1):  # 해당 당근과 다음 당근을 비교하기 위해 N - 1 만큼 순회
        if carrots[i] < carrots[i + 1]:  # 만약 다음 당근이 더 크다면
            cur_cnt += 1                 # 이번 구간의 당근의 개수를 1 증가
        else:                            # 만약 다음 당근이 더 작거나 같다면
            cur_cnt = 1                  # 이번 구간의 당근의 개수를 1로 초기화

        if sequence_cnt < cur_cnt:       # 만약 이번 구간이 기록을 갱신했다면
            sequence_cnt = cur_cnt       # 기록 갱신

    print(f'#{tc} {sequence_cnt}')
