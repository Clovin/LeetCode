/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let tempMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!tempMap.get(s[i])) {
      tempMap.set(s[i], 1)
      continue
    }

    tempMap.set(s[i], tempMap.get(s[i]) + 1)
  }

  let result = 0
  for (let [key, value] of tempMap) {
    result += Math.floor(value / 2)
  }

  return result * 2 === s.length ? result * 2 : result * 2 + 1
}
