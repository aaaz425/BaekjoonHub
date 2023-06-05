function solution(quiz) {
    return quiz.map(form => {
        const valueArr = form.split(" ");
        switch(valueArr[1]) {
            case "+":
                return +valueArr[0] + +valueArr[2] === +valueArr[4] ? "O" : "X";
            case "-":
                return +valueArr[0] - +valueArr[2] === +valueArr[4] ? "O" : "X";
        }
    })
}