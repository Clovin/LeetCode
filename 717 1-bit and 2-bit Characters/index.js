/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  return /^(10|11|0)*0$/.test(bits.join(''))
};