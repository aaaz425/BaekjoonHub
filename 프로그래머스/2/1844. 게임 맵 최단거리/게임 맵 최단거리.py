def solution(maps):
    M = len(maps)  # 행의 개수
    N = len(maps[0])  # 열의 개수
    visited = [[0] * N for _ in range(M)]  # 방문 여부를 저장하는 2차원 리스트
    q = [[0, 0]]  # BFS 큐
    front = 0  # 큐의 인덱스

    dx = [0, 0, -1, 1]  # 델타 탐색 이동 방향
    dy = [1, -1, 0, 0]  # 상, 하, 좌, 우

    while front < len(q):   # 큐에 요소가 있는 동안 반복
        y, x = q[front]     # 큐의 가장 앞 요소를 가져옴
        front += 1          # front 인덱스를 증가시켜 다음 요소로 이동

        for i in range(4):  # 네 방향으로 이동
            tx = x + dx[i]
            ty = y + dy[i]

            # 유효한 위치인지 확인
            if 0 <= ty < M and 0 <= tx < N:
                # 목적지에 도달한 경우
                if ty == M - 1 and tx == N - 1:
                    return visited[y][x] + 2  # 이동 거리가 아니라 칸 수이기 때문에 1을 더 더해줌

                # 이동 가능한 위치이고 방문하지 않았으면
                if maps[ty][tx] == 1 and visited[ty][tx] == 0:
                    q.append([ty, tx])  # 큐에 추가
                    visited[ty][tx] = visited[y][x] + 1  # 이동 거리 기록

    return -1  # 목적지에 도달할 수 없는 경우 -1 반환
