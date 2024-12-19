import math

def solution(progresses, speeds):
    left_days = [math.ceil((100 - progresses[i]) / speeds[i]) for i in range(len(progresses))]
    cur_day = left_days[0]
    head = 0
    answer = []

    while head < len(left_days):
        temp = 0
        for i in range(head, len(left_days)):
            if cur_day < left_days[i]:
                cur_day = left_days[i]
                break
            
            temp += 1
            head += 1
        
        if temp > 0:
            answer.append(temp)
    
    return answer
