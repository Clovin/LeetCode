/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let start = 0
  let end = Math.floor(Math.sqrt(c))

  while (end >= start) {
    let temp = start * start + end * end

    if (temp === c) {
      return true
    } else if (temp > c) {
      end--
    } else {
      start++
    }
  }

  return false
}
