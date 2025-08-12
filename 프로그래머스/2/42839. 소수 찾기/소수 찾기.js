function solution(numbers) {
    const set = new Set();

    const getPermutations  = (arr, fixed) => {
        if (fixed.length > 0) {
            set.add(parseInt(fixed.join('')));
        }
        for (let i = 0; i < arr.length; i++) {
            const next = arr.slice();
            next.splice(i, 1);
            getPermutations(next, fixed.concat(arr[i]));
        }
    }

    getPermutations(numbers.split(''), []);

    const isPrime = (num) => {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        
        return true;
    }
    
    let count = 0;
    set.forEach(num => {
        if (isPrime(num)) count++;
    });

    return count;
}
