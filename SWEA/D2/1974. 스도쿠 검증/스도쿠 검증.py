T = int(input())

for test_case in range(1, T + 1):
    puzzle_len = 9
    puzzle = [list(map(int, input().split())) for _ in range(puzzle_len)]
    multiple = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9  # 9개 숫자를 다 곱하면 항상 같아야 함
    result = 1

    # 가로, 세로를 생각해보자
    for i in range(puzzle_len):
        width_multiple = 1
        height_multiple = 1

        for j in range(puzzle_len):
            width_multiple *= puzzle[i][j]
            height_multiple *= puzzle[j][i]

        if width_multiple != multiple or height_multiple != multiple:
            result -= 1
            break

    if not result:
        print(f'#{test_case} {result}')
        continue

    # 3 * 3 범위를 생각해보자
    for i in range(0, puzzle_len, 3):
        for j in range(0, puzzle_len, 3):
            section_multiple = 1

            for k in range(3):
                for l in range(3):
                    section_multiple *= puzzle[i + k][j + l]

            if section_multiple != multiple:
                result -= 1
                break

        if not result:
            break

    print(f'#{test_case} {result}')
