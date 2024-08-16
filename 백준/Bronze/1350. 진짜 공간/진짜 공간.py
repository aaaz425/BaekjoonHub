N = int(input())

files = list(map(int, input().split()))
cluster = int(input())
result = 0

for file in files:
    if not file:
        continue

    share = file // cluster
    rest = file % cluster
    if rest:
        share += 1

    result += share * cluster

print(result)
