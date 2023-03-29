function solution(id_pw, db) {
    let answer = "fail";
    db.forEach(userInfo => {
        if (userInfo[0] === id_pw[0] && userInfo[1] !== id_pw[1]) {
            answer = "wrong pw";
        } else if (userInfo[0] === id_pw[0] && userInfo[1] === id_pw[1]) {
            answer = "login";
        }
    })
    return answer;
}