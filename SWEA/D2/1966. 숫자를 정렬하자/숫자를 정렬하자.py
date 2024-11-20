T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    num_list = list(map(int, input().split()))

    # 1. 버블 정렬
    for i in range(N - 1, -1, -1):
        for j in range(i):
            if num_list[i] < num_list[j]:
                num_list[i], num_list[j] = num_list[j], num_list[i]

    result = " ".join(list(map(str, num_list)))

    # 2. 카운팅 정렬
    # max_num = max(num_list)
    # count = [0] * (max_num + 1)
    # sorted_list = [0] * N
    #
    # for num in num_list:
    #     count[num] += 1
    #
    # for i in range(1, max_num + 1):
    #     count[i] += count[i - 1]
    #
    # for i in range(N - 1, -1, -1):
    #     count[num_list[i]] -= 1
    #     sorted_list[count[num_list[i]]] = num_list[i]
    #
    # result = " ".join(list(map(str, sorted_list)))

    # 3. 선택 정렬
    # for i in range(N - 1):
    #     min_i = i
    #     for j in range(i + 1, N):
    #         if num_list[min_i] > num_list[j]:
    #             min_i = j
    #     num_list[i], num_list[min_i] = num_list[min_i], num_list[i]
    #
    # result = " ".join(list(map(str, num_list)))

    # 4. 재귀
    # def get_sorted_num(number_list):
    #     min_num = number_list[0]
    #     min_index = 0
    #
    #     for index, num in enumerate(number_list):
    #         if min_num > num:
    #             min_num = num
    #             min_index = index
    #
    #     if len(number_list) == 1:
    #         return str(number_list.pop(min_index))
    #
    #     return str(number_list.pop(min_index)) + " " + get_sorted_num(number_list)
    #
    # result = get_sorted_num(num_list)

    print(f'#{test_case} {result}')
