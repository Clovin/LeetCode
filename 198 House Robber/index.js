/**
 * Created by Clovin on 11/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0
  } else if (nums.length === 1) {
    return nums[0]
  }

  let dp = [nums[0], nums[1] > nums[0] ? nums[1] : nums[0]]

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  }

  return dp[dp.length - 1] > dp[dp.length - 2] ? dp[dp.length - 1] : dp[dp.length - 2]
}
