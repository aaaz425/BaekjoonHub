T = int(input())

for test_case in range(1, T + 1):
    pipe = input() + ' '
    pipe_count = 0
    result = 0

    for index, bracket in enumerate(pipe):
        if bracket == '(':
            if pipe[index + 1] == ')':  # 레이저일 때
                result += pipe_count  # 쇠막대기 스택의 길이만큼 결과 더함
            else:  # 쇠막대기 시작 부분일 때
                result += 1  # 쇠막대기는 원래 1개니까 1 증가
                pipe_count += 1  # 현재 쇠막대기 갯수 증가

        elif bracket == ')':
            if pipe[index - 1] == '(':  # 레이저일 때 이미 처리했으니 다음 순회로 넘어감
                continue
            else:  # 쇠막대기 끝 부분일 때
                pipe_count -= 1  # 쇠막대기 스택에서 원소 하나 빼줌

    print(f'#{test_case} {result}')
