function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    keyinput.forEach(key => {
        switch (key) {
            case "up":
                if (y === (board[1] - 1) / 2) {
                    break;
                } else {
                    y++;
                break;
                }
            case "down":
                if (y === -((board[1] - 1) / 2)) {
                    break;
                } else {
                    y--;
                break;
                }
            case "left":
                if (x === -((board[0] - 1) / 2)) {
                    break;
                } else {
                    x--;
                break;
                }
            case "right":
                if (x === (board[0] - 1) / 2) {
                    break;
                } else {
                    x++;
                break;
                }
        }
    })
    return [x, y];
}