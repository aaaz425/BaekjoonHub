T = int(input())

for tc in range(1, T + 1):
    cnt = 0
    cur = '0'
    for bit in input():
        if bit != cur:
            if cur == '0':
                cur = '1'
            else:
                cur = '0'
            cnt += 1

    print(f'#{tc} {cnt}')
