/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b)

  let result = []

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      result.push(nums[i])
    }
  }

  if (nums[0] !== nums[1]) {
    result.push(nums[0])
  }

  if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    result.push(nums[nums.length - 1])
  }

  return result
}
