/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let temp = x ^ y
  temp = temp.toString(2)

  let cnt = 0
  for (let i = 0; i < temp.length; i++) {
    temp[i] === '1' && cnt++
  }

  return cnt
}