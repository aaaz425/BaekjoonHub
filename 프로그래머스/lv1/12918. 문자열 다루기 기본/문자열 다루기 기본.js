function solution(s) {
    const isLen = s.length;
    const isNum = s.replace(/\D/, "").length;
    if ((isLen === 4 || isLen === 6) && isLen === isNum) {   
        return true
    } else {
        return false;
    }
}