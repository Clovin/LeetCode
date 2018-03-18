/**
 * Created by Clovin on 19/03/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = []
  for (let i = 0; i < target + 1; i++) {
    dp[i] = 0
  }

  dp[0] = 1
  for (let i = 0; i < target + 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      dp[i + nums[j]] += dp[i]
    }
  }

  return dp[target]
}
