def solution(wallpaper):
    lux = len(wallpaper[0])
    luy = len(wallpaper)
    rdx = 0
    rdy = 0

    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[0])):
            if wallpaper[i][j] == "#":
                if lux > j:
                    lux = j
                if luy > i:
                    luy = i
                if rdx < j:
                    rdx = j
                if rdy < i:
                    rdy = i

    return [luy, lux, rdy + 1, rdx + 1]
