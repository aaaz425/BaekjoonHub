function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);

    let camera = -30001;
    let count = 0;

    for (const [start, end] of routes) {
        if (camera < start) {
            count++;
            camera = end;
        }
    }

  return count;
}