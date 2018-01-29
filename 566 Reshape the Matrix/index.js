/**
 * Created by Clovin on 29/01/2018.
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      temp.push(nums[i][j])
    }
  }

  if (temp.length !== r * c) {
    return nums
  }

  let result = []
  while (temp.length !== 0) {
    result.push(temp.splice(0, c))
  }

  return result
}

