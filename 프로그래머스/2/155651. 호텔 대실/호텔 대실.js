function solution(book_time) {
    const toMin = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    const times = book_time.map(([start, end]) => [
        toMin(start),
        toMin(end) + 10
    ]);

    times.sort((a, b) => a[0] - b[0]);

    const rooms = [];

    for (const [start, end] of times) {
        rooms.sort((a, b) => a - b);

        if (rooms.length && rooms[0] <= start) {
            rooms.shift();
        }

        rooms.push(end);
    }

    return rooms.length;
}