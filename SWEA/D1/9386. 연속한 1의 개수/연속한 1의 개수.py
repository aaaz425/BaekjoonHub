T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    nums = input()
    result = 0      # 연속된 1의 최대 개수
    cur_cnt = 0     # 현재 연속된 1의 개수

    for num in nums:
        if num == '1':        # 탐색중인 숫자가 1일 경우
            cur_cnt += 1      # 현재 연속된 1의 개수를 증가
        else:                 # 탐색중인 숫자가 0일 경우
            cur_cnt = 0       # 연속된 1의 개수 초기화

        if result < cur_cnt:  # 최대 개수보다 현재 개수가 많다면
            result = cur_cnt  # 최대 개수 갱신

    print(f'#{tc} {result}')
