T = int(input())

for test_case in range(1, T + 1):
    A, B = input().split()
    cnt = 0

    i = 0
    while i < len(A):
        if A[i : i + len(B)] == B:
            cnt += 1
            i += len(B)
        else:
            cnt += 1
            i += 1

    print(f'#{test_case} {cnt}')
