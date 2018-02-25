/**
 * Created by Clovin on 26/02/2018.
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return []
  }

  if (numRows === 1) {
    return [[1]]
  }

  let result = [[1], [1, 1]]
  for (let i = 3; i <= numRows; i++) {
    result[i - 1] = [1]

    for (let j = 1; j <= i - 2; j++) {
      result[i - 1].push(result[i - 2][j - 1] + result[i - 2][j])
    }

    result[i - 1].push(1)
  }

  return result
}
