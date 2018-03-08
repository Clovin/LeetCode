/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = []

  for (let i = 1; i <= 9; i++) {
    let sum = i
    let newArr = [sum]
    search(k, n, sum, newArr, i + 1, result)
  }

  return result
}

function search (cnt, n, sum, arr, start, result) {
  if (arr.length === cnt && sum === n) {
    result.push(arr)
  } else if (sum < n) {
    if (arr.length >= cnt || start > 9) {
      return
    } else {
      for (let i = start; i <= 9; i++) {
        let newSum = sum
        newSum += i

        if (newSum > n) {
          return
        }

        let newArr = []
        newArr = Array.from(arr)
        newArr.push(i)
        search(cnt, n, newSum, newArr, i + 1, result)
      }
    }
  }
}
