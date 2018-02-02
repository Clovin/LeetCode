/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let temp1 = new Set()
  let temp2 = new Set()
  for (let i = 0; i < nums1.length; i++) {
    temp1.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    temp2.add(nums2[i])
  }

  let result = []
  for (let key of temp1.keys()) {
    if (temp2.has(key)) {
      result.push(key)
    }
  }

  return result
}

intersection([1], [])