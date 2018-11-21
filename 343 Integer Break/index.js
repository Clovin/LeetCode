/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) {
        return n - 1;
    }

    let dp = [0, 1, 2, 3];
    for (let i = 4; i <= n; i++) {
        dp[i] = Math.max(2 * dp[i - 2], 3 * dp[i - 3]);
    }

    return dp[n];
};