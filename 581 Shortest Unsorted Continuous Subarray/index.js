/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let temp = Array.from(nums)
  temp.sort((a, b) => a - b)

  let begin = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== temp[i]) {
      begin = i
      break
    }
  }

  let end = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== temp[i]) {
      end = i
      break
    }
  }

  return end - begin + 1
}
