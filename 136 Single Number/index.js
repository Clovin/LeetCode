/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort()
  if (nums[0] !== nums[1]) {
    return nums[0]
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] || nums[i] === nums[i + 1]) {
      continue
    }

    return nums[i]
  }
}