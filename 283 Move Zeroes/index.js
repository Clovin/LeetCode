/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let cnt = 0
  let index = 0
  while (index < nums.length - cnt) {
    if (nums[index] === 0) {
      nums.splice(index, 1)
      nums.push(0)
      cnt++
    } else {
      index++
    }
  }
}