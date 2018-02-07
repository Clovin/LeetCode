/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let temp = parseInt(Math.abs(x).toString().split('').reverse().join(''))

  return temp > 2147483647 ? 0 : x < 0 ? -temp : temp
}
