/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let result = -9999999
  let tempNum = Array.from(nums)
  for (let i = k - 1; i < nums.length; i++) {
    for (let j = i - k + 1; j < i; j++) {
      tempNum[i] += nums[j]
    }
    if (tempNum[i] > result) {
      result = tempNum[i]
    }
  }

  return result / k
}
