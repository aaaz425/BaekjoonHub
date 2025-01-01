def dfs(x, tot=1):
    global result

    if x == N:
        if tot > result:
            result = tot
        return

    if tot <= result:
        return

    for i in range(0, N):
        if used[i]:
            continue

        used[i] = 1
        dfs(x + 1, tot * (costs[x][i] / 100))
        used[i] = 0


T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    costs = [list(map(int, input().split())) for _ in range(N)]
    used = [0] * N
    result = 0

    dfs(0)

    print(f'#{tc} {"{:.6f}".format(result * 100)}')
