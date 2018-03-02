/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true
    }

    if (i * i > num) {
      return false
    }
  }
}
