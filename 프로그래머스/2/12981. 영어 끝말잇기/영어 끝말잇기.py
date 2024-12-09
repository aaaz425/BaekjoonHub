def solution(n, words):
    answer = [0, 0]
    count = [0] * n
    word_list = []
    order = -1
    
    for i in range(len(words)):
        order += 1
        order %= n
        
        if i > 0 and (words[i] in word_list or words[i - 1][-1] != words[i][0]):
            answer = [order + 1, i // n + 1]
            break
            
        word_list.append(words[i])
        
    return answer