/**
 * Created by Clovin on 10/03/2018.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k === 0) {
    let tempSet = new Set()
    let already = new Set()
    let cnt = 0
    nums.forEach(item => {
      if (tempSet.has(item) && !already.has(item)) {
        cnt++
        already.add(item)
      } else {
        tempSet.add(item)
      }
    })
    return cnt
  }

  let tempSet = new Set()
  nums.forEach(item => tempSet.add(item))

  let newNums = []
  for (let [key] of tempSet.entries()) {
    newNums.push(key)
  }

  newNums.sort((a, b) => a - b)

  let cnt = 0
  for (let i = 0; i < newNums.length; i++) {
    for (let j = i + 1; j < newNums.length; j++) {
      if (newNums[j] - newNums[i] === k) {
        cnt++
      } else if (newNums[j] - newNums[i] > k) {
        break
      }
    }
  }

  return cnt
}
