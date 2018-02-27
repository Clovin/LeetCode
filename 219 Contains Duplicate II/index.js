/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  while (nums.length !== 0) {
    let temp = nums.shift()

    let index = nums.indexOf(temp)
    if (index !== -1 && index + 1 <= k) {
      return true
    }
  }

  return false
}
