/**
 * Created by Clovin on 25/02/2018.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ''

  if (strs.length === 0) {
    return result
  }

  let index = 0
  while (1) {
    if (strs[0].length === index) {
      return result
    }

    let temp = strs[0][index]
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length === index || strs[i][index] !== temp) {
        return result
      }
    }
    result += temp
    index++
  }
}
