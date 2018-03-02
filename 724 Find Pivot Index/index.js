/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i]

    if (temp - nums[i] === (sum - nums[i]) / 2) {
      return i
    }
  }

  return -1
}
