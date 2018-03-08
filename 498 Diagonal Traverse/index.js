/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let result = []

  if (matrix.length === 0) {
    return result
  }

  let i = 0
  let j = 0
  let isTop = true
  while (1) {
    if (isTop) {
      if (i === matrix.length - 1 && j === matrix[0].length - 1) {
        result.push(matrix[i][j])
        break
      }

      while (i >= 0 && j < matrix[0].length) {
        result.push(matrix[i--][j++])
      }

      i++
      j--
      if (j + 1 < matrix[0].length) {
        j++
      } else {
        i++
      }

      isTop = false
    } else {
      if (i === matrix.length - 1 && j === matrix[0].length - 1) {
        result.push(matrix[i][j])
        break
      }

      while (j >= 0 && i < matrix.length) {
        result.push(matrix[i++][j--])
      }

      i--
      j++
      if (i + 1 < matrix.length) {
        i++
      } else {
        j++
      }

      isTop = true
    }
  }

  return result
}
