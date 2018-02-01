/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  if (nums.length === 1) {
    return nums[0] === 0 ? 1 : 0
  }

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i
    }
  }

  return nums.length
}
