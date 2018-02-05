/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b)

  let max = nums[0] * nums[1] * nums[2]
  if (nums[0] * nums[1] * nums[nums.length - 1] > max) {
    max = nums[0] * nums[1] * nums[nums.length - 1]
  }

  if (nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3] > max) {
    max = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  }

  return max
}
