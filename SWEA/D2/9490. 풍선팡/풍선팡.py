T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())  # N * M 크기의 풍선 2차원 리스트
    balloons = [list(map(int, input().split())) for _ in range(N)]
    cnt = 0                           # 총 꽃가루 개수

    for y in range(N):                # 풍선 2차원 리스트를 전부 순회
        for x in range(M):
            t_cnt = balloons[y][x]    # 선택한 풍선의 꽃가루 개수
            temp_cnt = -t_cnt         # t_cnt 만큼의 상하좌우 풍선을 터트렸을 때 꽃가루의 합 -> 가운데 풍선은 두번 더해지기 때문에 한번 빼줌

            for i in range(-t_cnt, t_cnt + 1):      # t_cnt 만큼 상하좌우 델타 탐색
                ty = y + i                          # 상하 풍선의 인덱스
                tx = x + i                          # 좌우 풍선의 인덱스

                if 0 <= ty < N:                     # 만약 델타 탐색할 상하 인덱스가 2차원 리스트의 범위를 벗어나지 않는다면
                    temp_cnt += balloons[ty][x]     # 해당 케이스에 터트린 풍선의 꽃가루 개수를 추가
                if 0 <= tx < M:                     # 만약 델타 탐색할 좌우 인덱스가 2차원 리스트의 범위를 벗어나지 않는다면
                    temp_cnt += balloons[y][tx]     # 해당 케이스에 터트린 풍선의 꽃가루 개수를 추가

            if cnt < temp_cnt:                      # 만약 기록이 갱신됐다면
                cnt = temp_cnt                      # 기록 갱신

    print(f'#{tc} {cnt}')
