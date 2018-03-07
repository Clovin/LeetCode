/**
 * Created by Clovin on 07/03/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let resultArray = []
  let maxLen = 0

  let tempMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let tempSet = new Set()
    let cnt = 1
    let temp = nums[i]
    tempSet.add(i)
    while (!tempSet.has(temp)) {
      if (tempMap.has(temp)) {
        cnt += tempMap.get(temp)
        break
      }

      cnt++
      tempSet.add(temp)
      temp = nums[temp]
    }

    tempMap.set(i, cnt)
    if (cnt > maxLen) {
      resultArray = []
      resultArray.push(i)
      maxLen = cnt
    } else if (cnt === maxLen) {
      resultArray.push(i)
    }
  }

  let result = 0
  for (let i = 0; i < resultArray.length; i++) {
    let tempSet = new Set()
    let cnt = 1
    let temp = nums[resultArray[i]]
    tempSet.add(resultArray[i])
    while (!tempSet.has(temp)) {
      cnt++
      tempSet.add(temp)
      temp = nums[temp]
    }

    if (cnt === maxLen) {
      return maxLen
    }

    if (cnt > result) {
      result = cnt
    }
  }

  return result
}
