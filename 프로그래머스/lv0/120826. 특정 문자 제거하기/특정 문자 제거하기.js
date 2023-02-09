function solution(my_string, letter) {
    var answer = '';
    const my_array = my_string.split('');
    const filter = my_array.filter(element => element !== letter)
    answer = filter.join('');
    return answer;
}