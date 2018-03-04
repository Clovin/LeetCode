/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  let repeatStr = A
  let cnt = 1
  while (A.indexOf(B) === -1) {
    A += repeatStr
    cnt++

    if (cnt > Math.floor(B.length / repeatStr.length) + 2) {
      return -1
    }
  }
  return cnt
}
