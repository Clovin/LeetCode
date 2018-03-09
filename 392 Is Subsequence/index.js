/**
 * Created by Clovin on 10/03/2018.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0
  for (let i = 0; i < s.length; i++) {
    for (; j < t.length; j++) {
      if (s[i] === t[j]) {
        j++
        break
      }
    }

    if (j === t.length) {
      return i === s.length - 1 && s[i] === t[j - 1]
    }
  }

  return true
}
