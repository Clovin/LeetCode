/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let temp = n.toString(2)
  for (let i = temp.length; i < 32; i++) {
    temp = '0' + temp
  }
  return parseInt(temp.split('').reverse().join(''), 2)
}
