/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  let temp = Array.from(nums)
  temp.sort((a, b) => b - a)

  let result = []
  for (let i = 0; i < nums.length; i++) {
    let index = temp.indexOf(nums[i])
    if (index <= 2) {
      if (index === 0) {
        result.push('Gold Medal')
      } else if (index === 1) {
        result.push('Silver Medal')
      } else {
        result.push('Bronze Medal')
      }

      continue
    }

    result.push((index + 1).toString())
  }

  return result
}
