/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let temp = s.split('')
  let result = ''

  let i = 1
  while (temp.length !== 0) {
    if (i++ % 2 === 0) {
      result += temp.splice(0, k).join('')
    } else {
      result += temp.splice(0, k).reverse().join('')
    }
  }

  return result
}
