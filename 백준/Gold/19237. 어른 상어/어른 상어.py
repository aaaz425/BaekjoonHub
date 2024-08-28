N, M, K = map(int, input().split())
sharks = [[]] + [[i, 0, 0, 0, False] for i in range(1, M + 1)]
smells = [[[0, 0] for _ in range(N)] for _ in range(N)]

for i in range(N):
    row = list(map(int, input().split()))

    for j in range(N):
        if row[j]:
            sharks[row[j]][1] = i
            sharks[row[j]][2] = j
            smells[i][j] = [row[j], K]

for i, di in enumerate(list(map(int, input().split()))):
    sharks[i + 1][3] = di

priority = [[]] + [[[]] + [[0, 0, 0, 0] for _ in range(4)] for _ in range(M)]
for i in range(1, M + 1):
    for j in range(1, 5):
        priority[i][j] = list(map(int, input().split()))

dx = [0, 0, 0, -1, 1]
dy = [0, -1, 1, 0, 0]

time = 0
cnt = M

while cnt > 1 and time <= 1000:
    time += 1
    f_s = time + K

    for shark in sharks:
        if shark:
            n, y, x, di, is_moved = shark
            sharks[n][4] = False

            for d in range(4):
                ty = y + dy[priority[n][di][d]]
                tx = x + dx[priority[n][di][d]]

                if 0 <= tx < N and 0 <= ty < N:
                    s_n, t = smells[ty][tx]

                    if t < time:
                        sharks[n][1] = ty
                        sharks[n][2] = tx
                        sharks[n][3] = priority[n][di][d]
                        sharks[n][4] = True
                        smells[ty][tx] = [n, f_s]
                        break
                    elif t == f_s:
                        cnt -= 1
                        sharks[n] = []
                        break

    for shark in sharks:
        if shark and not shark[4]:
            n, y, x, di, is_moved = shark

            for d in range(4):
                ty = y + dy[priority[n][di][d]]
                tx = x + dx[priority[n][di][d]]

                if 0 <= tx < N and 0 <= ty < N:
                    s_n, t = smells[ty][tx]

                    if s_n == n:
                        sharks[n][1] = ty
                        sharks[n][2] = tx
                        sharks[n][3] = priority[n][di][d]
                        sharks[n][4] = True
                        smells[ty][tx] = [n, f_s]
                        break

if time > 1000:
    print(-1)
else:
    print(time)