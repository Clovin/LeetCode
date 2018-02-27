/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let temp = n.toString(2)
  let cnt = 0
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '1') {
      cnt++
    }
  }
  return cnt
}
