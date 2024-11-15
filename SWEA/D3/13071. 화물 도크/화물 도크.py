T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    times = [list(map(int, input().split())) for _ in range(N)]
    end_time = 0
    result = 0

    for i in range(N - 1, -1, -1):
        for j in range(i):
            if times[j][1] > times[j + 1][1]:
                times[j], times[j + 1] = times[j + 1], times[j]

    for i in range(N):
        if times[i][0] >= end_time:
            end_time = times[i][1]
            result += 1

    print(f'#{tc} {result}')
