T = int(input())

for tc in range(1, T + 1):
    N = int(input())    # N * N 크기의 바둑판
    checkerboard = [input() for _ in range(N)]
    result = 'NO'       # 5개 이상 연속하면 YES 로 바꾸고 반복 종료 하기 때문에 NO 로 초기화

    for i in range(N):          # N *N 리스트를 순회 하며 모든 점을 탐색
        for j in range(N):
            right = 0           # 한 점을 기준으로 우측 방향을 탐색할 변수
            right_down = 0      # 한 점을 기준으로 우측하단 방향을 탐색할 변수
            down = 0            # 한 점을 기준으로 하단 방향을 탐색할 변수
            left_down = 0       # 한 점을 기준으로 좌측 하단을 탐색할 변수

            for k in range(5):  # 5개만 연속되면 되기 때문에 해당 점으로부터 5칸 탐색
                # 각 방향마다 인덱스를 벗어나지 않도록 주의하며 돌이 있는지 확인
                if j + k < N and checkerboard[i][j + k] == 'o':
                    right += 1          # 우측 방향에 돌이 있다면 1 증가
                if i + k < N and j + k < N and checkerboard[i + k][j + k] == 'o':
                    right_down += 1     # 우측 하단 방향에 돌이 있다면 1 증가
                if 0 <= i - k and checkerboard[i - k][j] == 'o':
                    down += 1           # 하단 방향에 돌이 있다면 1 증가
                if i + k < N and 0 <= j - k and checkerboard[i + k][j - k] == 'o':
                    left_down += 1      # 좌측 하단 방향에 돌이 있다면 1 증가

            # 만약 네 방향중 어느 방향이라도 5개의 돌이 연속되어 있다면
            if right == 5 or right_down == 5 or down == 5 or left_down == 5:
                result = 'YES'  # 결과를 YES 로 변환 후 해당 반복문 종료
                break

        if result == 'YES':     # 결과가 YES 라면 탐색 완전 종료
            break

    print(f'#{tc} {result}')
