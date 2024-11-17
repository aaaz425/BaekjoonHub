"""
2차원 배열 문제
출발점의 x 좌표를 구하라
도착점은 2, 사다리 경로는 1,나머지는 0으로 채워짐
도착점에서 거꾸로 올라가며 찾아간다면??
"""

for _ in range(10):
    test_case = int(input())

    ladder_matrix = [list(map(int, input().split())) for _ in range(100)]  # 입력값을 받아 100 * 100 2중 배열 생성
    x = 0  # 임시로 x 좌표에 0을 대입
    y = 99  # 거꾸로 올라가기 위해 맨 아래 y 좌표를 y 변수에 대입

    # 일단 도착점의 x 좌표를 찾아서 x 라는 변수에 대입
    for i in range(100):
        if ladder_matrix[y][i] == 2:  # 도착점의 x 좌표를 찾았다 !
            x = i
            break

    """
    도착 y 좌표(99) 에서 시작, 1씩 줄이며 거꾸로 올라가자
    만약 올라가다 좌우에 1을 만나면 x 좌표를 옮기자
    음수 인덱스, 인덱스 범위 벗어남을 주의 ! 
    y 좌표가 0보다 크다면 반복 !
    """

    while y > 0:
        if x > 0 and ladder_matrix[y][x - 1]:  # 왼쪽으로 이동할 수 있는 경우
            while x > 0 and ladder_matrix[y][x - 1]:
                x -= 1  # x 좌표가 0보다 크고, 왼쪽의 x 좌표가 1일 동안 x 감소
            y -= 1  # 위로 이동
        elif x < 99 and ladder_matrix[y][x + 1]:  # 오른쪽으로 이동할 수 있는 경우
            while x < 99 and ladder_matrix[y][x + 1]:
                x += 1  # x 좌표가 99보다 작고, 오른쪽의 x 좌표가 1일 동안 x 증가
            y -= 1  # 위로 이동
        else:  # 왼쪽, 오른쪽 모두 이동 불가능할 경우
            y -= 1  # 위로 이동

    print(f'#{test_case} {x}')
