/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = null
  let second = null
  let third = null

  first = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== first && second === null) {
      if (nums[i] > first) {
        second = first
        first = nums[i]
      } else {
        second = nums[i]
      }
      continue
    }

    if (nums[i] !== first && nums[i] !== second && third === null) {
      if (nums[i] > first) {
        third = second
        second = first
        first = nums[i]
      } else if (nums[i] > second) {
        third = second
        second = nums[i]
      } else {
        third = nums[i]
      }
      continue
    }

    if (nums[i] === first || nums[i] === second || nums[i] === third) {
      continue
    }

    if (nums[i] > first) {
      third = second
      second = first
      first = nums[i]
      continue
    }

    if (nums[i] > second) {
      third = second
      second = nums[i]
      continue
    }

    if (nums[i] > third) {
      third = nums[i]
    }
  }

  return third !== null ? third : first
}

console.log(thirdMax([3, 2, 1]))