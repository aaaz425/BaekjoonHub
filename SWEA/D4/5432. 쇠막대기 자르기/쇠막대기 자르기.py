T = int(input())

for test_case in range(1, T + 1):
    pipe = input() + ' '
    pipe_count = 0
    result = 0

    for index, bracket in enumerate(pipe):  # 현재 문자와 다음 문자를 비교하기 위해 enumerate, 인덱스 사용
        if bracket == '(':
            if pipe[index + 1] == ')':  # 레이저일 때
                result += pipe_count    # 현재 쇠막대기의 개수만큼 더함
            else:                       # 쇠막대기 시작 부분일 때
                result += 1             # 쇠막대기는 원래 1개니까 1 증가
                pipe_count += 1         # 현재 쇠막대기 개수 증가

        elif bracket == ')':
            if pipe[index - 1] == '(':  # 레이저일 때 이미 처리했으니 다음 순회로 넘어감
                continue
            else:                       # 쇠막대기 끝 부분일 때
                pipe_count -= 1         # 현재 쇠막대기 개수에서 1 감소

    print(f'#{test_case} {result}')
