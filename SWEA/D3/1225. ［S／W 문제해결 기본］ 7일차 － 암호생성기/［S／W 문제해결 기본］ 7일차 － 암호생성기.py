# 3. 원형 큐
for _ in range(1, 11):
    tc = input()
    pwd_queue = list(map(int, input().split())) + [0]  # 큐의 크기를 N + 1만큼 설정하여 원형 큐를 한칸씩 밀도록 설계

    front = 0                                       # 큐의 머리, 삭제가 일어나는 곳
    rear = 7                                        # 큐의 꼬리, 삽입이 일어나는 곳

    while pwd_queue[rear] > 0:                      # 큐의 꼬리가 0보다 클 때 동안 반복
        for i in range(1, 6):                       # i는 1부터 5까지
            rear = (rear + 1) % 9                   # 큐의 꼬리에 요소를 추가하기 위해 큐의 꼬리 인덱스 증가
            pwd_queue[rear] = pwd_queue[front] - i  # 큐의 꼬리에 큐의 첫 요소 - i 의 값을 대입
            front = (front + 1) % 9                 # 큐의 머리 인덱스 증가

            if pwd_queue[rear] <= 0:                # 만약 큐의 꼬리가 0보다 같거나 작을 경우
                pwd_queue[rear] = 0                 # 큐의 꼬리를 0으로 변환
                break

    if front > rear:  # 큐의 머리가 꼬리보다 클 경우 (머리 ~ 큐의 끝 + 큐의 처음 ~ 꼬리)로 큐 변형
        pwd_queue = pwd_queue[front:] + pwd_queue[0: rear + 1]
    else:             # 아닐 경우 큐의 머리 ~ 꼬리까지 큐 자르기
        pwd_queue = pwd_queue[front: rear + 1]

    print(f'#{tc} {" ".join(map(str, pwd_queue))}')
