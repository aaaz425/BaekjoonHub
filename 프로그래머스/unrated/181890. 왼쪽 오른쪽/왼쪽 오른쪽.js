function solution(str_list) {
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");
    const lastIndex = str_list.length - 1
    
    if (lIndex === rIndex) {
        return [];
    }
    
    if (rIndex === -1) {
        return lIndex === 0 ? [] : str_list.slice(0, lIndex);
    }
    
    if (lIndex === -1) {
        return rIndex === lastIndex ? [] : str_list.slice(rIndex + 1);
    }
    
    if (lIndex > rIndex) {
        return str_list.slice(rIndex + 1);
    }
    
    return str_list.slice(0, lIndex);
}
