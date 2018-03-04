/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digitType = 1
  let digitNum = 9

  while (n > digitNum * digitType) {
    n -= Math.floor(digitNum * digitType)
    digitType++
    digitNum *= 10
  }

  let indexInSubRange = (n - 1) / digitType
  let indexInNum = (n - 1) % digitType

  let num = Math.pow(10, digitType - 1) + indexInSubRange
  return parseInt(('' + num).charAt(indexInNum) + '')
}
