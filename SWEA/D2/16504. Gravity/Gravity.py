T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    box_list = list(map(int, input().split()))
    max_drop = 0

    for i in range(N - 1):
        drop = 0
        for j in range(i + 1, N):
            if box_list[i] > box_list[j]:
                drop += 1

        if max_drop < drop:
            max_drop = drop

    print(f'#{test_case} {max_drop}')
