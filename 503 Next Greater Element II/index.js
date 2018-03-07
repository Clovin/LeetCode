/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        result.push(nums[j])
        break
      }
    }
    if (result.length !== i + 1) {
      for (let j = 0; j < i; j++) {
        if (nums[j] > nums[i]) {
          result.push(nums[j])
          break
        }
      }
    }

    if (result.length !== i + 1) {
      result.push(-1)
    }
  }
  return result
}
