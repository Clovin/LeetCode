/**
 * Created by Clovin on 10/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  return search(nums, 0, nums.length - 1) >= 0
}

function search (nums, i, j) {
  if (i === j) {
    return nums[i]
  }

  let first = nums[i] - search(nums, i + 1, j)
  let last = nums[j] - search(nums, i, j - 1)

  return Math.max(first, last)
}
