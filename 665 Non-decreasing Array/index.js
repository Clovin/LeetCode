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
      if (flag) {

        //TODO: solve
        flag = false
      } else {
        return false
      }
    }
  }

  return true
}
