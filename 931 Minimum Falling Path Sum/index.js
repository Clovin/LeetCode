/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let dp = [[]];

    for (let i = 0; i < A[0].length; i++) {
        dp[0][i] = A[0][i];
    }

    for (let i = 1; i < A.length; i++) {
        dp[i] = []
        for (let j = 0; j < A[i].length; j++) {
            let temp = [];
            if (j - 1 >= 0) {
                temp.push(dp[i - 1][j - 1]);
            }
            temp.push(dp[i - 1][j]);
            if (j + 1 < A[i].length) {
                temp.push(dp[i - 1][j + 1]);
            }
            dp[i][j] = Math.min(...temp) + A[i][j];
        }
    }

    let result = dp[dp.length - 1][0];
    for (let i = 0; i < dp[0].length; i++) {
        if (result > dp[dp.length - 1][i]) {
            result = dp[dp.length - 1][i];
        }
    }

    return result;
};
