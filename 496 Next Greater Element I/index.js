/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  return findNums.map(num => {
    for (let i = nums.indexOf(num) + 1; i < nums.length; i++) {
      if (nums[i] > num) {
        return nums[i]
      }
    }

    return -1
  })
}
