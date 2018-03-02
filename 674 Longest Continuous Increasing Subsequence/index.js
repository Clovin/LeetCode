/**
 * Created by Clovin on 02/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let max = 1
  let cnt = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      max = cnt > max ? cnt : max
      cnt = 1
      continue
    }

    cnt++
  }
  max = cnt > max ? cnt : max

  return max
}
