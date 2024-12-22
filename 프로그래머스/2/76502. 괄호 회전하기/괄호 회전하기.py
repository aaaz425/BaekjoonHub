def solution(s):
    answer = 0

    for i in range(len(s)):
        # 문자열을 왼쪽으로 한 칸 회전
        s = s[1:] + s[0]
        stack = []

        for char in s:
            stack.append(char)

            # 스택에 하나만 남았을 때 닫는 괄호가 오면 중단
            if len(stack) == 1:
                if stack[0] in [')', '}', ']']:
                    break
                continue

            # 스택의 마지막 두 요소가 올바른 쌍이면 제거
            if (stack[-1] == ')' and stack[-2] == '(') or \
               (stack[-1] == '}' and stack[-2] == '{') or \
               (stack[-1] == ']' and stack[-2] == '['):
                stack.pop()
                stack.pop()

        # 스택이 비어 있으면 올바른 괄호 문자열로 카운트
        if not stack:
            answer += 1

    return answer
