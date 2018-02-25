/**
 * Created by Clovin on 25/02/2018.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0
  let i = m
  for (; i < nums1.length; i++) {
    if (j === n) {
      break
    }

    nums1[i] = nums2[j++]
  }

  if (i === nums1.length) {
    nums1.sort((a, b) => a - b)
  } else {
    let temp = nums1.splice(m + j - 1)
    nums1.sort((a, b) => a - b)
    nums1.push(...temp)
  }
}
