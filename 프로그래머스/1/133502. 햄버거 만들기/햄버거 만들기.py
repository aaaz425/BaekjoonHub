def solution(ingredient):
    stack = [0] * len(ingredient)
    top = -1
    cnt = 0

    for v in ingredient:
        top += 1
        stack[top] = v

        while top > 2:
            if (stack[top - 3] == 1 and
                stack[top - 2] == 2 and
                stack[top - 1] == 3 and
                stack[top] == 1):
                cnt += 1
                top -= 4
            else:
                break

    return cnt
