pass_dict = {
    '[0, 0, 0, 1, 1, 0, 1]': 0,
    '[0, 0, 1, 1, 0, 0, 1]': 1,
    '[0, 0, 1, 0, 0, 1, 1]': 2,
    '[0, 1, 1, 1, 1, 0, 1]': 3,
    '[0, 1, 0, 0, 0, 1, 1]': 4,
    '[0, 1, 1, 0, 0, 0, 1]': 5,
    '[0, 1, 0, 1, 1, 1, 1]': 6,
    '[0, 1, 1, 1, 0, 1, 1]': 7,
    '[0, 1, 1, 0, 1, 1, 1]': 8,
    '[0, 0, 0, 1, 0, 1, 1]': 9,
}

T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())
    pass_matrix = [list(map(int, list(input()))) for _ in range(N)]

    y = 0
    x = 0

    for row in range(N):
        escape = 0

        if not sum(pass_matrix[row]):
            continue

        for col in range(M):
            if not sum(pass_matrix[row][:col]) and not sum(pass_matrix[row][col + 56:]):
                y, x = row, col
                escape += 1
                break

        if escape:
            break

    code = []
    pass_code = pass_matrix[y][x: x + 56]
    for i in range(8):
        code.append(pass_dict.get(str(pass_code[i * 7: i * 7 + 7])))

    odd = 0
    even = 0

    for i in range(8):
        if i % 2:
            even += code[i]
        else:
            odd += code[i]

    result = odd * 3 + even

    if result % 10:
        print(f'#{tc} 0')
    else:
        print(f'#{tc} {odd + even}')
