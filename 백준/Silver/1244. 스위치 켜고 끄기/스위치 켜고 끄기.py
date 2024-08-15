def toggle_switch(state):
    return 1 - state


N = int(input().strip())
switches = list(map(int, input().strip().split()))
s_cnt = int(input().strip())

for _ in range(s_cnt):
    gender, s_num = map(int, input().strip().split())
    s_i = s_num - 1

    if gender == 1:
        for i in range(s_i, len(switches), s_num):
            switches[i] = toggle_switch(switches[i])
    else:
        t_range = 0
        while s_i - t_range >= 0 and s_i + t_range < N and switches[s_i - t_range] == switches[s_i + t_range]:
            t_range += 1
        t_range -= 1
        for i in range(s_i - t_range, s_i + t_range + 1):
            switches[i] = toggle_switch(switches[i])

for i in range(0, N, 20):
    print(" ".join(map(str, switches[i:i + 20])))