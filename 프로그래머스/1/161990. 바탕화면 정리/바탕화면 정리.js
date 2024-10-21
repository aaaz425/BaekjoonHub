function solution(wallpaper) {
  let lux = wallpaper[0].length;
  let luy = wallpaper.length;
  let rdx = 0;
  let rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (lux > j) {
          lux = j;
        }

        if (luy > i) {
          luy = i;
        }

        if (rdx < j) {
          rdx = j;
        }

        if (rdy < i) {
          rdy = i;
        }
      }
    }
  }

  return [luy, lux, rdy + 1, rdx + 1];
}