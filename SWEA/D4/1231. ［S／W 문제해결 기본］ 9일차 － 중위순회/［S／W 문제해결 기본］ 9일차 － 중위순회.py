"""
중위순회 in-order
"""


def in_order(node):
    global word                 # 최종 출력할 단어

    if node:                    # 탐색 위치에 노드가 있다면
        in_order(left[node])    # 그 노드의 왼쪽 자식 탐색
        word += nodes[node]     # 최종 단어에 노드에 담긴 단어 추가
        in_order(right[node])   # 그 노드의 오른쪽 자식 탐색


for tc in range(1, 11):
    N = int(input())            # 단어의 길이
    left = [0] * (N + 1)        # 왼쪽 자식의 인덱스가 들어감
    right = [0] * (N + 1)       # 오른쪽 자식의 인덱스가 들어감
    nodes = [''] * (N + 1)      # 이진 트리 형태로 나뉘어진 단어가 들어감

    for _ in range(N):
        i, v, *rest = input().split()   # 인덱스, 단어, 자식 인덱스 정보를 unpacking
        i = int(i)                      # 인덱스 정수화
        rest = list(map(int, rest))     # 자식 인덱스 정보 리스트의 요소들을 int 타입으로 변경

        if len(rest) >= 1:               # 자식이 하나 이상 있을 경우
            left[i] = rest[0]           # 첫번째 요소를 왼쪽 자식 인덱스에 추가
        if len(rest) == 2:              # 자식이 둘 있을 경우
            right[i] = rest[1]          # 두번째 요소를 오른쪽 자식 인덱스에 추가

        nodes[i] = v                    # 주어진 단어를 주어진 인덱스에 저장

    word = ''                           # 최종 출력할 단어
    root = 1                            # 루트는 항상 1
    in_order(root)                      # 중위 순회 시작

    print(f'#{tc} {word}')
