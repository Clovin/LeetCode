/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let flag = true

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      let [newNum1, newNum2] = [Array.from(nums), Array.from(nums)]
      let [flag1, flag2] = [true, true]
      if (i - 1 >= 0) {
        newNum1.splice(i, 1, newNum1[i - 1] + 1)
        flag1 = search(i, newNum1)
      } else {
        flag1 = search(1, newNum1)
      }

      if (i + 2 < nums.length) {
        newNum2.splice(i + 1, 1, newNum2[i + 2] - 1)
        flag2 = search(i, newNum2)
      }

      return flag1 || flag2
    }
  }

  return true
}

function search (index, nums) {
  for (let i = index; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false
    }
  }
  return true
}