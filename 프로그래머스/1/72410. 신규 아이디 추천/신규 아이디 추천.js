function solution(new_id) {
    let result = new_id.toLowerCase();
    
    result = result.replace(/[^a-z0-9-_.]/g, '');
    result = result.replace(/\.{2,}/g, '.');
    result = result.replace(/^\.|\.$/g, '');
    
    if (result === '') {
        result = 'a';
    }

    if (result.length >= 16) {
        result = result.substring(0, 15);
        result = result.replace(/\.$/, '');
    }

    while (result.length < 3) {
        result += result[result.length - 1];
    }

    return result;
}
