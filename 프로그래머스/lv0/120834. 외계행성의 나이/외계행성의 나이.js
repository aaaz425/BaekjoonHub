function solution(age) {
    const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return [...String(age)].map((element) => char[+element]).join('');
}