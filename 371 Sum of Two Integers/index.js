/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1)
}