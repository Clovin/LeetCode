/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0

  let tempIndex = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && tempIndex !== null) {
      if (i - tempIndex > max) {
        max = i - tempIndex
      }
      tempIndex = null
      continue
    }

    if (nums[i] === 1 && tempIndex === null) {
      tempIndex = i
    }
  }
  if (tempIndex !== null && nums.length - tempIndex > max) {
    max = nums.length - tempIndex
  }

  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]))