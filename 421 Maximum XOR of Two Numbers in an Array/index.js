/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] ^ nums[j]) > max) {
        max = nums[i] ^ nums[j]
      }
    }
  }
  return max
}
