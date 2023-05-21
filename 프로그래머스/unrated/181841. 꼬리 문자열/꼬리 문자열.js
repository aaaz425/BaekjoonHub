function solution(str_list, ex) {
    return str_list.map(str => {
        return str.includes(ex) ? "" : str;
    }).join("")
}