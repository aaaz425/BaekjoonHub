function solution(cacheSize, cities) {
  const cache = new Map();
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.has(city)) {
      cache.delete(city);
      cache.set(city, true);
      time += 1;
    } else {
      if (cacheSize > 0) {
        if (cache.size === cacheSize) {
          const oldest = cache.keys().next().value;
          cache.delete(oldest);
        }
        cache.set(city, true);
      }
      time += 5;
    }
  }

  return time;
}