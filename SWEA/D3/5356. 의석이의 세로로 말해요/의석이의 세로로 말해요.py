T = int(input())

for test_case in range(1, T + 1):
    word_list = []
    result = ''
    max_len = 0

    for _ in range(5):
        word_list.append(input())

    for word in word_list:
        if max_len < len(word):
            max_len = len(word)

    for i in range(max_len):
        for word in word_list:
            if i < len(word):
                result += word[i]

    print(f'#{test_case} {result}')
