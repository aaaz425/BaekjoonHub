function solution(phone_number) {
    return [...phone_number]
    .reverse()
    .map((v, i) => i > 3 ? v = '*' : v)
    .reverse()
    .join('')
}