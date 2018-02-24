/**
 * Created by Clovin on 25/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0]
  let temp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (temp < 0) {
      if (nums[i] > temp) {
        temp = nums[i]

        if (result < temp) {
          result = temp
        }
      }
    } else {
      if (nums[i] + temp > 0) {
        temp = nums[i] + temp

        if (result < temp) {
          result = temp
        }
      } else {
        temp = nums[i]
      }
    }
  }

  return result
}
