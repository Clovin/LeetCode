/**
 * Created by Clovin on 04/02/2018.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  s = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
  t = t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false
    }
  }

  return true
}
