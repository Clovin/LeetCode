/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length

  for (let i = 0; i < Math.floor((nums.length - k) / 2); i++) {
    let temp = nums[nums.length - k - 1 - i]
    nums[nums.length - k - 1 - i] = nums[i]
    nums[i] = temp
  }

  for (let i = 0; i < k / 2; i++) {
    let temp = nums[nums.length - 1 - i]
    nums[nums.length - 1 - i] = nums[nums.length - k + i]
    nums[nums.length - k + i] = temp
  }

  nums.reverse()
}
