/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 0) {
    return false
  }

  let sum = 0
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i
    }
  }

  return sum === num
}
