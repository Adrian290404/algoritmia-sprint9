function solution(n, m) {
    function bigIntFourthRoot(x) {
        let low = 0n, high = x;
        while (low <= high) {
            let mid = (low + high) / 2n;
            let mid4 = mid * mid * mid * mid;
            if (mid4 === x) {
                return mid;
            } 
            else if (mid4 < x) {
                low = mid + 1n;
            } 
            else {
                high = mid - 1n;
            }
        }
        return high;
    }
    
    const maxP = bigIntFourthRoot(m);
    const maxPNum = Number(maxP);
    
    const sieve = new Array(maxPNum + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= maxPNum; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= maxPNum; j += i) {
            sieve[j] = false;
            }
        }
    }
    
    const primes = [];
    for (let i = 2; i <= maxPNum; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    
    const result = [];
    for (const p of primes) {
        const candidate = BigInt(p) ** 4n;
        if (candidate >= n && candidate <= m) {
            result.push(candidate);
        }
    }
    
    return result;
}