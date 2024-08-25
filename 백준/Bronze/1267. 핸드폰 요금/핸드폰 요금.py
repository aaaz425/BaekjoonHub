N = int(input())
call_times = list(map(int, input().split()))

Y = 0
M = 0

for call_time in call_times:
    Y += (call_time // 30 + 1) * 10
    M += (call_time // 60 + 1) * 15

if Y > M:
    print(f'M {M}')
elif Y < M:
    print(f'Y {Y}')
else:
    print(f'Y M {Y}')
