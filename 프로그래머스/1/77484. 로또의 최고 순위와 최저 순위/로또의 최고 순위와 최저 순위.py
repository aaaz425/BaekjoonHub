def solution(lottos, win_nums):
    # 로또 번호 중 0의 개수를 세어 저장
    zero_count = lottos.count(0)
    # 당첨 번호와 로또 번호가 같은 갯수
    confirmed_count = sum(1 for num in win_nums if num in lottos)
    
    # 0이 모두 당첨 됐다고 가정했을 때의 등수
    max_rank = 7 - (zero_count + confirmed_count)
    if max_rank > 6:
        max_rank = 6  # 등수는 6보다 낮을 수 없음
    
    # 0이 모두 틀렸다고 가정했을 때의 등수
    min_rank = 7 - confirmed_count
    if min_rank > 6:
        min_rank = 6  # 등수는 6보다 낮을 수 없음
    
    # 최대 등수와 최소 등수를 리스트로 반환
    return [max_rank, min_rank]
