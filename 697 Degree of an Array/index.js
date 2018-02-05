/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let temp = []
  let maxLength = 1

  if (nums.length === 1) {
    return 1
  }

  let tempNums = Array.from(nums)
  tempNums.sort((a, b) => a - b)

  let cnt = 1
  for (let i = 1; i < tempNums.length; i++) {
    if (tempNums[i] === tempNums[i - 1]) {
      cnt++
    } else {
      if (cnt > maxLength) {
        temp = []
        temp.push(tempNums[i - 1])
        maxLength = cnt
      } else if (cnt === maxLength) {
        temp.push(tempNums[i - 1])
      }

      cnt = 1
    }
  }

  if (cnt > maxLength) {
    temp = []
    temp.push(tempNums[tempNums.length - 1])
    maxLength = cnt
  } else if (cnt === maxLength) {
    temp.push(tempNums[tempNums.length - 1])
  }

  let result = 99999
  for (let i = 0; i < temp.length; i++) {
    let len = nums.lastIndexOf(temp[i]) - nums.indexOf(temp[i])

    if (len < result) {
      result = len
    }
  }

  return result === 0 ? 1 : result + 1
}

findShortestSubArray([1, 3, 2, 2, 2, 1, 1, 3, 1, 1, 2])