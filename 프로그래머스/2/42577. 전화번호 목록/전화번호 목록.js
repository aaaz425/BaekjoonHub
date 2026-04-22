function solution(phone_book) {
    const set = new Set();
    for (const phone of phone_book) {
        set.add(phone);
    }
    for (const phone of phone_book) {
        for (let i = 0; i < phone.length; i++) {
            if (set.has(phone.slice(0, i))) {
                return false;
            }
        }
    }
    
    return true;
}