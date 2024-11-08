function solution(k, room_number) {
    const answer = Array(room_number.length).fill(0);
    const map = new Map();

    function findEmptyRoom(num) {
        if (!map.has(num)) {
            map.set(num, num + 1);
            return num;
        }
        
        const emptyRoom = findEmptyRoom(map.get(num));
        map.set(num, emptyRoom);
        return emptyRoom;
    }

    room_number.forEach((num, index) => {
        const emptyRoom = findEmptyRoom(num);
        answer[index] = emptyRoom;
    });

    return answer;
}
