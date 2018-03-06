/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (i - 1 >= 0) {
        if (nums[i] !== nums[i - 1]) {
          return nums[i]
        }
      } else {
        return nums[i]
      }
    }
  }

  return nums[nums.length - 1]
}
