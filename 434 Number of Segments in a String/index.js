/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let cnt = 0
  let flag = false
  for (let i = 0; i < s.length; i++) {
    if (!flag && s[i] !== ' ') {
      flag = true
      cnt++
    } else if (s[i] === ' ') {
      flag = false
    }
  }
  return cnt
}
