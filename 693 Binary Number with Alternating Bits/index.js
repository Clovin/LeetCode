/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let temp = n.toString(2)
  for (let i = 0; i < temp.length - 1; i++) {
    if (temp[i] === temp[i + 1]) {
      return false
    }
  }
  return true
}