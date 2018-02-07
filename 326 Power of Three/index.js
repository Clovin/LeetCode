/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) {
    return false
  }

  let result = Math.log(n) / Math.log(3)

  return Math.abs(result - Math.round(result)) < 10e-15;
}
