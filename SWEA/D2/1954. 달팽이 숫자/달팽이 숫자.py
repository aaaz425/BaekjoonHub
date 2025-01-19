T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    snail = [[0] * N for _ in range(N)]

    direction = 'r'
    row = 0
    col = 0

    num = 1
    while num < N * N + 1:
        if direction == 'r':
            snail[row][col] = num

            if col + 1 == N or snail[row][col + 1]:
                direction = 'b'
                row += 1
                num += 1
                continue

            col += 1
        elif direction == 'b':
            snail[row][col] = num

            if row + 1 == N or snail[row + 1][col]:
                direction = 'l'
                n = 'l'
                col -= 1
                num += 1
                continue

            row += 1
        elif direction == 'l':
            snail[row][col] = num

            if col - 1 < 0 or snail[row][col - 1]:
                direction = 't'
                row -= 1
                num += 1
                continue

            col -= 1
        else:
            snail[row][col] = num

            if row - 1 < 0 or snail[row - 1][col]:
                direction = 'r'
                col += 1
                num += 1
                continue

            row -= 1

        num += 1

    print(f'#{test_case}')
    for row in snail:
        print(' '.join(list(map(str, row))))
