def solution(food):
    water, *real_food = food
    answer = [0]
    
    for idx, val in enumerate(reversed(real_food)):
        count = val // 2
        value = len(real_food) - idx
        answer = [value] * count + answer + [value] * count
    
    return ''.join(map(str, answer))
