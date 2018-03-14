/**
 * Created by Clovin on 15/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  return search(1, nums.length - 1, nums)
}

function search (begin, end, nums) {
  if (begin >= end) {
    return begin
  }

  let mid = Math.floor((end + begin) / 2)
  let cnt = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= mid) {
      cnt++
    }
  }

  if (cnt > mid) {
    return search(begin, mid, nums)
  } else {
    return search(mid + 1, end, nums)
  }
}
