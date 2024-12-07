for test_case in range(1, 11):
    test_case, E = map(int, input().split())
    matrix = [[0] * 100 for _ in range(100)]  # 인접 행렬
    visited = [0] * 100                       # 방문 여부
    routes = list(map(int, input().split()))

    for i in range(E):
        v1 = routes[i * 2]
        v2 = routes[i * 2 + 1]
        matrix[v1][v2] = 1

    stack = [0]                                # 방문할 노드 스택
    result = 0

    while stack:
        cur = stack.pop()

        if cur == 99:
            result += 1
            break

        if visited[cur] == 0:
            visited[cur] = 1

            for i in range(1, 100):
                if matrix[cur][i] == 1 and visited[i] == 0:
                    stack.append(i)

    print(f'#{test_case} {result}')
