/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1
  let cnt = 0
  while (n >= i) {
    n -= i
    cnt++
    i++
  }
  return cnt
}
