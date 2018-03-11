/**
 * Created by Clovin on 12/03/2018.
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  let result = ''
  let hexs = '0123456789abcdef'
  let isNegative = false
  if (num < 0) {
    num += Math.pow(2, 32)
  }

  while (num) {
    result = hexs[num % 16] + result
    num = Math.floor(num / 16)
  }

  return result === '' ? '0' : result
}
