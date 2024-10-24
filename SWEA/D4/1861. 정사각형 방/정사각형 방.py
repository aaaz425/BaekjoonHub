T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    rooms = [list(map(int, input().split())) for _ in range(N)]
    can_move = [0] * (N ** 2 + 1)
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]

    for y in range(N):
        for x in range(N):
            for di in range(4):
                tx, ty = x + dx[di], y + dy[di]

                if 0 <= tx < N and 0 <= ty < N:
                    if rooms[y][x] == rooms[ty][tx] - 1:
                        can_move[rooms[y][x]] = 1

    max_len = 0
    temp_len = 0
    result = 0

    for i in range(N ** 2, -1, -1):
        if can_move[i]:
            temp_len += 1
        else:
            if max_len <= temp_len:
                max_len = temp_len
                result = i + 1

            temp_len = 0

    print(f'#{tc} {result} {max_len + 1}')
