def solution(board, moves):
    stack = []
    result = 0

    for move in moves:
        move -= 1

        for i in range(len(board)):
            if board[i][move] != 0:
                stack.append(board[i][move])
                board[i][move] = 0

                if len(stack) > 1 and stack[-1] == stack[-2]:
                    stack.pop()
                    stack.pop()
                    result += 2

                break

    return result
