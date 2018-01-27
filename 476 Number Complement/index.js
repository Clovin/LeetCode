/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return parseInt(num.toString(2)
                     .replace(/[01]/g, match => {
                       return match === '0' ? '1' : '0'
                     }), 2)
}
