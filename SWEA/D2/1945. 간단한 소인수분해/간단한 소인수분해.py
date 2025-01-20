T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    factors = (2, 3, 5, 7, 11)
    result = [0] * 5

    i = 0
    while N > 1:
        if N / factors[i] == N // factors[i]:
            result[i] += 1
            N /= factors[i]
        else:
            i += 1

    print(f'#{test_case} {" ".join(map(str, result))}')
