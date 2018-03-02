/**
 * Created by Clovin on 02/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let temp = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (temp.has(nums[i])) {
      temp.set(nums[i], temp.get(nums[i]) + 1)
    } else {
      temp.set(nums[i], 1)
    }
  }

  let result = 0
  for (let [key, value] of temp.entries()) {
    if (temp.has(key - 1) && temp.get(key - 1) + value > result) {
      result = temp.get(key - 1) + value
    }

    if (temp.has(key + 1) && temp.get(key + 1) + value > result) {
      result = temp.get(key + 1) + value
    }
  }

  return result
}
