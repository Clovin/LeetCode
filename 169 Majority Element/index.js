/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let tempMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!tempMap.has(nums[i])) {
      tempMap.set(nums[i], 1)
      if (1 >= nums.length / 2) {
        return nums[i]
      }
      continue
    }

    let temp = tempMap.get(nums[i]) + 1
    if (temp >= nums.length / 2) {
      return nums[i]
    }
    tempMap.set(nums[i], temp)
  }
}
