"""
후위 표기법, 스택을 연습해보자
연산자는 +, * 뿐이고,
피연산자는 0 ~ 9사이의 정수

1. 먼저 중위 표기법을 후위 표기법으로 변환하고
2. 후위 표기법을 계산하자
"""

for test_case in range(1, 11):
    N = int(input())  # 문자열의 길이
    infix = input()  # 입력받은 중위 표기법
    postfix = ''  # 채워나갈 후위 표기법
    priority = {
        '+': 1,
        '*': 2
    }
    stack = [''] * N  # 스택의 크기를 미리 확보해 둠
    top = -1  # 스택 포인터

    for char in infix:  # 먼저 중위표기법을 후위 표기법으로 변환하자
        if not char.isdigit():  # 만약 문자가 연산자일 경우
            if top != -1:  # 만약 스택에 연산자가 남아 있다면
                if priority[char] > priority[stack[top]]:  # 현재 연산자의 우선 순위가 스택 포인터의 우선 순위보다 높으면
                    top += 1                               # 스택 포인터를 1 증가 시킨다
                    stack[top] = char                      # 후위 표기법에 현재 연산자를 추가
                else:
                    while top > -1 and priority[char] <= priority[stack[top]]:  # 현재 연산자의 우선순위가 스택 포인터의 우선순위보다 낮거나 같을 경우 반복
                        postfix += stack[top]  # 연산자를 스택에서 하나 빼고 후위 표기법에 추가한다
                        top -= 1  # 스택 포인터를 1 감소 시킨다
                    else:
                        top += 1  # 스택 포인터를 1 증가 시킨다
                        stack[top] = char  # 후위 표기법에 현재 연산자를 추가
            else:
                top += 1  # 스택 포인터를 1 증가 시킨다
                stack[top] = char  # 연산자를 스택에 추가한다
        else:  # 만약 문자가 피연산자일 경우
            postfix += char  # 후위 표현식에 피연산자를 추가한다
    else:  # 만약 반복문이 정상적으로 전부 돌았을 경우
        while top != -1:  # 스택에 연산자가 남아 있으면
            postfix += stack[top]  # 후위 표기법에 연산자를 추가한다
            top -= 1  # 스택 포인터를 1 감소 시킨다

    for char in postfix:  # 변환한 후위 표기법을 스택을 이용하여 계산해보자
        if not char.isdigit():  # 만약 문자가 연산자일 경우
            if top > 0:
                r_v = stack[top]  # 나중에 들어간 피연산자가 연산자 오른쪽에 위치 해야 함 (후입선출)
                top -= 1
                l_v = stack[top]  # 그 전에 들어간 피연산자가 연산자 왼쪽에 위치 해야 함
                top -= 1

                top += 1
                if char == '+':
                    stack[top] = f'{int(l_v) + int(r_v)}'  # 스택에 연산 결과를 저장
                elif char == '*':
                    stack[top] = f'{int(l_v) * int(r_v)}'  # 스택에 연산 결과를 저장
        else:  # 만약 문자가 피연산자일 경우
            top += 1           # 스택 포인터를 1 증가 시킨다
            stack[top] = char  # 문자를 숫자로 바꿔 스택에 저장

    print(f'#{test_case} {stack[top]}')  # 스택에 남은 결과를 출력