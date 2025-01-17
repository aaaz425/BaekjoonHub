T = int(input())

for test_case in range(1, T + 1):
    N, K = list(map(int, input().split()))      # N -> 퍼즐의 길이, K -> 단어의 길이
    puzzle = [list(map(int, input().split())) for _ in range(N)]  # 퍼즐 모양 -> 0: 검은색(단어 X), 1: 흰색(단어 O)
    result = 0

    for i in range(N):
        width = 0                   # 특정 위치부터 시작한 흰 칸의 연속된 가로 길이
        height = 0                  # 특정 위치부터 시작한 흰 칸의 연속된 세로 길이
        for j in range(N):
            if puzzle[i][j]:        # 해당 위치가 흰 칸(단어 O)인 경우
                width += 1          # 흰 칸의 연속된 가로 길이 증가

                if j == N - 1 and width == K:   # 해당 행의 마지막 열이 흰 칸이고, 흰 칸의 연속된 가로 길이가 K인 경우
                    result += 1                 # 출력할 결과 1 증가
            else:                   # 해당 위치가 검은 칸인 경우
                if width == K:      # 기록해놓은 연속된 흰 칸의 가로 길이를 먼저 확인하여 K와 같다면
                    result += 1     # 출력할 결과 1 증가

                width = 0           # 검은 칸을 만났으니 흰 칸의 연속된 가로 길이 0으로 초기화

            if puzzle[j][i]:        # 해당 위치가 흰 칸(단어 O)인 경우
                height += 1         # 흰 칸의 연속된 세로 길이 증가

                if j == N - 1 and height == K:   # 해당 열의 마지막 행이 흰 칸이고, 흰 칸의 연속된 세로 길이가 K인 경우
                    result += 1                  # 출력할 결과 1 증가
            else:                   # 해당 위치가 검은 칸인 경우
                if height == K:     # 기록해놓은 연속된 흰 칸의 세로 길이를 먼저 확인하여 K와 같다면
                    result += 1     # 출력할 결과 1 증가

                height = 0          # 검은 칸을 만났으니 흰 칸의 연속된 세로 길이 0으로 초기화

    print(f'#{test_case} {result}')
