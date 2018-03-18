/**
 * Created by Clovin on 19/03/2018.
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = []
  for (let i = 0; i < m; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        temp.push(1)
      } else {
        temp.push(0)
      }
    }
    dp.push(temp)
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
