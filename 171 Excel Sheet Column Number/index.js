/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let sum = 0
  let base = 1
  for (let i = s.length - 1; i >= 0; i--) {
    sum += (s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * base
    base *= 26
  }
  return sum
}
