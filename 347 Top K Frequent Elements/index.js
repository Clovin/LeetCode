/**
 * Created by Clovin on 07/03/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let tempMap = new Map()
  let tempArray = []

  for (let i = 0; i < nums.length; i++) {
    if (tempMap.has(nums[i])) {
      tempMap.set(nums[i], tempMap.get(nums[i]) + 1)
    } else {
      tempMap.set(nums[i], 1)
      tempArray.push(nums[i])
    }
  }

  tempArray.sort((a, b) => tempMap.get(b) - tempMap.get(a))

  return tempArray.slice(0, k)
}
