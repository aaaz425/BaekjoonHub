def post_order(node):
    if node:
        post_order(graph[node][0])
        post_order(graph[node][1])
        post.append(node)


for tc in range(1, 11):
    N = int(input())
    graph = [[0, 0] for _ in range(N + 1)]
    nodes = [0] * (N + 1)

    for _ in range(N):
        n, v, *rest = list(input().split())
        n = int(n)
        rest = list(map(int, rest))

        if not v.isdigit():
            graph[n] = rest

        nodes[n] = v

    post = []
    post_order(1)
    stack = [0] * (N + 1)
    top = -1

    for i in post:
        if nodes[i].isdigit():
            top += 1
            stack[top] = int(nodes[i])
        else:
            r = stack[top]
            top -= 1
            l = stack[top]

            if nodes[i] == '+':
                stack[top] = l + r
            elif nodes[i] == '-':
                stack[top] = l - r
            elif nodes[i] == '*':
                stack[top] = l * r
            else:
                stack[top] = l / r

    print(f'#{tc} {int(stack[top] // 1)}')
