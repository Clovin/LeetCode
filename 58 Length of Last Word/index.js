/**
 * Created by Clovin on 25/02/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.search(/(\w+$)|(\b\w+$)/i) !== -1) {
    return s.length - s.search(/(\w+$)|(\b\w+$)/i)
  }

  if (s.search(/(\b\w+\s+$)|(\w+\s+$)/i) !== -1) {
    return s.search(/\w\s+$/i) - s.search(/(\b\w+\s+$)|(\w+\s+$)/i) + 1
  }

  return 0
}
