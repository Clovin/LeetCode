/**
 * Created by Clovin on 26/02/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = [1, 2]
  for (let i = 3; i <= n; i++) {
    result.push(result[i - 2] + result[i - 3])
  }

  return result[n - 1]
}
