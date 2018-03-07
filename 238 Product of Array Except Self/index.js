/**
 * Created by Clovin on 07/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left2right = []
  let right2left = []

  left2right[0] = nums[0]
  right2left[nums.length - 1] = nums[nums.length - 1]
  for (let i = 1; i < nums.length; i++) {
    left2right[i] = left2right[i - 1] * nums[i]
    right2left[nums.length - i - 1] = right2left[nums.length - i] * nums[nums.length - i - 1]
  }

  let result = []
  for (let i = 1; i < nums.length - 1; i++) {
    result.push(left2right[i - 1] * right2left[i + 1])
  }
  result.push(left2right[nums.length - 2])
  result.unshift(right2left[1])

  return result
}
