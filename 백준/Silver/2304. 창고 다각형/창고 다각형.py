N = int(input())
heights = [0] * 1001

min_i = 1000
max_i = 0
max_h = 0
max_h_i = 0
area = 0

for _ in range(N):
    i, h = map(int, input().split())

    heights[i] = h

    if max_h < h:
        max_h = h
        max_h_i = i

    if min_i > i:
        min_i = i

    if max_i < i:
        max_i = i

prev_h = 0

# 최대 높이 보다 왼쪽, 같은 위치일 경우
for i in range(min_i, max_h_i + 1):
    if prev_h < heights[i]:
        prev_h = heights[i]

    area += prev_h

prev_h = 0

# 최대 높이보다 오른쪽에 위치할 경우
for i in range(max_i, max_h_i, -1):
    if prev_h < heights[i]:
        prev_h = heights[i]

    area += prev_h

print(area)