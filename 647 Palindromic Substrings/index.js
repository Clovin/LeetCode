/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let cnt = 1
  for (let i = 1; i < s.length; i++) {
    cnt++
    cnt += countString(i - 1, i, s)
    cnt += countString(i - 1, i + 1, s)
  }
  return cnt
}

function countString (left, right, s) {
  let cnt = 0
  while (s[left] === s[right]) {
    cnt++
    left--
    right++
    if (left < 0 || right >= s.length) {
      break
    }
  }
  return cnt
}
