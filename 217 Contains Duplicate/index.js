/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (temp.has(nums[i])) {
      return true
    }

    temp.add(nums[i])
  }

  return false
}
