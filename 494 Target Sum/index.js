/**
 * Created by Clovin on 17/03/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let result = {
    cnt: 0
  }

  search(0, 0, nums, S, result)

  return result.cnt
}

function search (index, now, nums, S, result) {
  if (index === nums.length) {
    if (now === S) {
      result.cnt++
    }
    return
  }

  search(index + 1, now + nums[index], nums, S, result)
  search(index + 1, now - nums[index], nums, S, result)
}
