import sys

N = int(sys.stdin.readline().rstrip())
ans = 1
for _ in range(N):
    multi = int(sys.stdin.readline().rstrip())
    ans += multi - 1

print(ans)
