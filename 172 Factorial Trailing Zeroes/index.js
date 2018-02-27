/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n < 5) {
    return 0
  }

  let count = 0
  while (n >= 5) {
    count += Math.floor(n / 5)
    n = parseInt(n / 5)
  }

  return count
}
