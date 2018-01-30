/**
 * Created by Clovin on 31/01/2018.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  return a === b ? -1 : a.length > b.length ? a.length : b.length
}
