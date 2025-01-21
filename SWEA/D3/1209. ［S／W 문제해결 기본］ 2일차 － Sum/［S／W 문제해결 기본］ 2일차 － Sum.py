for _ in range(10):
    test_case = int(input())
    matrix = [0] * 100

    for i in range(100):
        matrix[i] = list(map(int, input().split()))

    result = 0

    forward_diagonal = 0
    backward_diagonal = 0

    for i in range(100):
        row = 0
        col = 0

        for j in range(100):
            row += matrix[i][j]
            col += matrix[j][i]

            if i == j:
                forward_diagonal += matrix[i][j]
            if 99 - j == i:
                backward_diagonal += matrix[i][j]

        if result < row:
            result = row
        if result < col:
            result = col

    if result < forward_diagonal:
        result = forward_diagonal
    if result < backward_diagonal:
        result = backward_diagonal

    print(f'#{test_case} {result}')
