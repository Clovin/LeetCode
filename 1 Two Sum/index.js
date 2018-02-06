/**
 * Created by Clovin on 07/02/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(target - nums[i]) !== -1 && nums.lastIndexOf(target - nums[i]) > i) {
      return [i, nums.lastIndexOf(target - nums[i])]
    }
  }
}
