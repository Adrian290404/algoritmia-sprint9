function calc(cards) {
    const n = cards.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = cards[i] * (2 ** n);
    }
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            const multiplier = 2 ** (n - len + 1);
            dp[i][j] = Math.max(
                cards[i] * multiplier + dp[i + 1][j],
                cards[j] * multiplier + dp[i][j - 1]
            );
        }
    }
    
    return dp[0][n - 1];
}  