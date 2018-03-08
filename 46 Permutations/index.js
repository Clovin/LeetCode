/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []

  search(nums, [], result)

  return result
}

function search (nums, arr, result) {
  if (arr.length === nums.length) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
      temp.push(nums[arr[i]])
    }
    result.push(temp)
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(i)) {
      let newArr = Array.from(arr)
      newArr.push(i)
      search(nums, newArr, result)
    }
  }
}
