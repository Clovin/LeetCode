/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  if (nums.length === 1) {
    return '' + nums[0]
  } else if (nums.length === 2) {
    return '' + nums[0] + '/' + nums[1]
  }

  let result = ''

  result += nums[0]
  result += '/(' + nums[1]
  for (let i = 2; i < nums.length; i++) {
    result += '/' + nums[i]
  }
  result += ')'

  return result
}
