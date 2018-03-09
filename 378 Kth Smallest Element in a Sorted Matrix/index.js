/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  matrix.sort((a, b) => a[0] - b[0])

  let result = null
  let cnt = 0
  while (cnt < k) {
    result = matrix[0][0]
    matrix[0].shift()
    cnt++

    if (matrix[0].length === 0) {
      matrix.shift()
    }

    matrix.sort((a, b) => {
      return a[0] - b[0]
    })
  }

  return result
}
