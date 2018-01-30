/**
 * Created by Clovin on 30/01/2018.
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let width = matrix[0].length
  let height = matrix.length

  for (let i = 0; i < width; i++) {
    let j = i
    let k = 0
    while (++k < height && ++j < width) {
      if (matrix[k][j] !== matrix[k - 1][j - 1]) {
        return false
      }
    }
  }

  for (let i = 1; i < height; i++) {
    let j = i
    let k = 0
    while (++k < width && ++j < height) {
      if (matrix[j][k] !== matrix[j - 1][k - 1]) {
        return false
      }
    }
  }

  return true
}

isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])