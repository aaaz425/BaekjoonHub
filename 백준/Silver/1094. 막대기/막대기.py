x = int(input())
stick = 64
half = 32
cnt = 1

while stick > x:
    if stick - half > x:
        stick -= half
        cnt -= 1
    elif stick - half == x:
        break

    half = half / 2
    cnt += 1

print(cnt)