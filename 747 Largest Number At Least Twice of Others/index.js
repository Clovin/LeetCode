/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) {
    return 0
  }

  let tempNums = Array.from(nums)
  tempNums.sort((a, b) => a - b)

  if (tempNums[tempNums.length - 1] >= 2 * tempNums[tempNums.length - 2]) {
    return nums.indexOf(tempNums[tempNums.length - 1])
  }

  return -1
}
