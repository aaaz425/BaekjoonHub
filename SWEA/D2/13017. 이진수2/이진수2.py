T = int(input())

for tc in range(1, T + 1):
    target = float(input())
    result = ''
    com_v = 0

    for i in range(1, 13):
        v = 2 ** -i
        if com_v + v > target:
            result += '0'
        elif com_v + v <= target:
            result += '1'
            com_v += v

        if com_v == target:
            break

    if com_v == target:
        print(f'#{tc} {result}')
    else:
        print(f'#{tc} overflow')
