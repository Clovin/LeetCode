/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let temp = n
  let result = []
  while (temp > 0) {
    temp--
    result.push(String.fromCharCode(temp % 26 + 'A'.charCodeAt(0)))
    temp = parseInt(temp / 26)
  }

  return result.reverse().join('')
}