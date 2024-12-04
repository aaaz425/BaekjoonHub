T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())
    flies = [list(map(int, input().split())) for _ in range(N)]
    result = 0

    for y in range(N):
        for x in range(N):
            row = 0
            col = 0
            forward = 0
            backward = 0

            for i in range(-M + 1, M):
                tx, tbx, ty = x + i, x - i, y + i

                if 0 <= tx < N:
                    row += flies[y][tx]

                if 0 <= ty < N:
                    col += flies[ty][x]

                if 0 <= tx < N and 0 <= ty < N:
                    forward += flies[ty][tx]

                if 0 <= tbx < N and 0 <= ty < N:
                    backward += flies[ty][tbx]

            cross = row + col - flies[y][x]
            ex = forward + backward - flies[y][x]

            if result < cross:
                result = cross
            if result < ex:
                result = ex

    print(f'#{tc} {result}')
