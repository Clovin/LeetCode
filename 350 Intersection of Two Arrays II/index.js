/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let temp1 = new Map()
  let temp2 = new Map()
  for (let i = 0; i < nums1.length; i++) {
    if (temp1.has(nums1[i])) {
      temp1.set(nums1[i], temp1.get(nums1[i]) + 1)
      continue
    }
    temp1.set(nums1[i], 1)
  }

  for (let i = 0; i < nums2.length; i++) {
    if (temp2.has(nums2[i])) {
      temp2.set(nums2[i], temp2.get(nums2[i]) + 1)
      continue
    }
    temp2.set(nums2[i], 1)
  }

  let result = []
  for (let [key, value] of temp1.entries()) {
    if (temp2.has(key)) {
      let cnt = temp2.get(key) > value ? value : temp2.get(key)

      for (let i = 1; i <= cnt; i++) {
        result.push(key)
      }
    }
  }

  return result
}

intersect([2, 1], [1, 1])