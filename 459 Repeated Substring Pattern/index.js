/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    let str = s
    let substr = s.slice(0, i)
    let temp = str

    while (str.length !== 0) {
      temp = str.replace(substr, '')
      if (temp === str) {
        break
      }

      if (temp.length === 0) {
        return true
      }

      str = temp
    }
  }

  return false
}

repeatedSubstringPattern('abab')
