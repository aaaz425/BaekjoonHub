def solution(food):
    answer = []
    water, *real_food = food
    
    for idx, val in enumerate(reversed(real_food)):
        count = val // 2
        value = len(real_food) - idx
        answer = [value] * count + answer + [value] * count

    answer.insert(len(answer) // 2, 0)
    
    return ''.join(map(str, answer))
