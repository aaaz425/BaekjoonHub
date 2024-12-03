T = int(input())


def transfer_char(char: chr):
    if char == 'p':
        return 'q'
    elif char == 'q':
        return 'p'
    elif char == 'b':
        return 'd'
    else:
        return 'b'


for test_case in range(1, T + 1):
    target_str = input()
    mirrored_str = ''
    result = 0

    for i in range(len(target_str)):
        mirrored_str += transfer_char(target_str[- (i + 1)])

    print(f'#{test_case} {mirrored_str}')
