/**
 * Created by Clovin on 24/02/2018.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }

  let cntX = x
  let numCnt = 0
  while (cntX !== 0) {
    numCnt++
    cntX = Math.floor(cntX / 10)
  }

  let headX = Math.abs(x)
  let endX = Math.abs(x)

  while (headX !== 0) {
    let head = Math.floor(headX / Math.pow(10, numCnt - 1))
    let end = endX % 10

    if (head === end) {
      headX -= head * Math.pow(10, numCnt - 1)
      numCnt--
      endX = Math.floor(endX / 10)
    } else {
      return false
    }
  }

  return true
}
