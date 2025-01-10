"""
카운팅 정렬을 활용해보자
why? 최댓값이 작고 이미 알고있음, 또한 인덱스 활용도 충분히 가능해보임
"""

T = int(input())

for _ in range(T):
    test_case, N = input().split()
    case_len = int(N)
    nums = input().split()

    str_nums = ("ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN")  # enumerate 활용!
    count = [0] * 10  # 0 ~ 9의 숫자를 카운트할 리스트
    result = [""] * case_len

    # 일반적인 카운팅
    # for num in nums:
    #     count[num] += 1

    # 1. 입력 받은 str 타입의 리스트를 돌며 카운팅
    for num in nums:  # num 은 str 타입, 'ZRO' ~ 'NIN'
        for i, str_num in enumerate(str_nums):  # enumerate 를 활용하여 순회하며 인덱스와 요소를 뽑아냄
            if num == str_num:  # 입력받은 값과, str 타입 숫자 리스트의 값이 같다면?
                count[i] += 1  # 카운트 리스트의 해당 인덱스를 1 증가
    # 최악의 경우 for 문이 10 * 10,000 번 돔

    # 2. 누적합 구하기
    for i in range(1, 10):
        count[i] += count[i - 1]
    # 10 번 돔

    # 3. 카운팅 정렬 마무리
    for i in range(case_len - 1, -1, -1):  # 입력받은 리스트를 끝 인덱스 부터 순회
        for index, str_num in enumerate(str_nums):  # 카운팅과 마찬가지로 str 숫자 리스트 순회, enumerate 활용
            if nums[i] == str_num:  # 만약 순회하던 입력 리스트의 값과 str 숫자 리스트의 값이 같다면?
                count[index] -= 1  # 카운트 배열의 str 숫자 리스트의 인덱스에 해당하는 값을 1 감소
                result[count[index]] += str_num  # 결과의 누적합 인덱스에 str 타입의 숫자를 더함

    print(f'{test_case} {" ".join(result)}')
