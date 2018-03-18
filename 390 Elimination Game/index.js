/**
 * Created by Clovin on 19/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  if (n === 1) {
    return 1
  } else {
    return 2 * (Math.floor(n / 2) + 1 - lastRemaining(Math.floor(n / 2)))
  }
}
