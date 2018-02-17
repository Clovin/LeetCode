/**
 * Created by Clovin on 17/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  nums.sort((a, b) => a - b)

  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }

  result -= nums[0] * nums.length

  return result
}
