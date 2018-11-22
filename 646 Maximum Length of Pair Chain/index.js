/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let dp = [1];
    
    pairs.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < pairs.length; i++) {
        dp[i] = 1;

        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > result) {
            result = dp[i];
        }
    }

    return result;
};