dwarfs = [int(input()) for _ in range(9)]
used = [0] * 9

path = []
result = [0]


def recur(x, tot):
    if result[0]:
        return

    if tot > 100:
        return

    if x == 7:
        if tot == 100:
            result[0] = path[:]
        return

    for i in range(9):
        if used[i]:
            continue

        used[i] += 1
        path.append(dwarfs[i])
        recur(x + 1, tot + dwarfs[i])
        path.pop()
        used[i] -= 1


recur(0, 0)
result[0].sort()

for dwarf in result[0]:
    print(dwarf)