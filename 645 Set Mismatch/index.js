/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let result = []

  let tempSet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (tempSet.has(nums[i])) {
      result.push(nums[i])
    }

    tempSet.add(nums[i])
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!tempSet.has(i)) {
      result.push(i)
      break
    }
  }

  return result
}
