T = int(input())

for test_case in range(1, T + 1):
    target_str = input()
    reversed_str = ''
    result = 0

    for i in range(len(target_str)):
        reversed_str += target_str[- (i + 1)]

    if target_str == reversed_str:
        result += 1

    print(f'#{test_case} {result}')
