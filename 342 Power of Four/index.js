/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (1 === num) {
    return true
  }

  let temp = 1
  while (temp < num) {
    temp *= 4

    if (temp === num) {
      return true
    }
  }

  return false
}
