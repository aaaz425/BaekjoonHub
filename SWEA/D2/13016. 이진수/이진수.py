def hexa_to_bin(v):
    bin_val = ''

    while v:
        if v % 2:
            bin_val += '1'
        else:
            bin_val += '0'

        v //= 2

    while len(bin_val) < 4:
        bin_val += '0'

    return bin_val[::-1]


hexa = '0123456789ABCDEF'
hexa_dict = {}
for i, v in enumerate(hexa):
    hexa_dict.setdefault(v, hexa_to_bin(i))


T = int(input())

for tc in range(1, T + 1):
    _, hexa_v = input().split()
    result = ''

    for v in hexa_v:
        result += hexa_dict.get(v)

    print(f'#{tc} {result}')
