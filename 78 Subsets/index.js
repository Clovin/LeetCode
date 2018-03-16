/**
 * Created by Clovin on 17/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]]

  search([], 0, nums, result)

  return result
}

function search (nowArr, index, nums, result) {
  for (let i = index; i < nums.length; i++) {
    let newArr = Array.from(nowArr)
    newArr.push(nums[i])
    result.push(newArr)
    search(newArr, i + 1, nums, result)
  }
}