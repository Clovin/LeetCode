/**
 * Created by Clovin on 18/02/2018.
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let newImage = []
  for (let i = 0; i < M.length; i++) {
    newImage.push(Array.from(M[i]))
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      let cnt = 1
      let temp = M[i][j]

      // top
      if (i - 1 >= 0) {
        temp += M[i - 1][j]
        cnt++
      }

      // right
      if (j + 1 < M[i].length) {
        temp += M[i][j + 1]
        cnt++
      }

      // bottom
      if (i + 1 < M.length) {
        temp += M[i + 1][j]
        cnt++
      }

      // left
      if (j - 1 >= 0) {
        temp += M[i][j - 1]
        cnt++
      }

      // top-left
      if (i - 1 >= 0 && j - 1 >= 0) {
        temp += M[i - 1][j - 1]
        cnt++
      }

      // top-right
      if (i - 1 >= 0 && j + 1 < M[i].length) {
        temp += M[i - 1][j + 1]
        cnt++
      }

      // bottom-left
      if (i + 1 < M.length && j - 1 >= 0) {
        temp += M[i + 1][j - 1]
        cnt++
      }

      // bottom-right
      if (i + 1 < M.length && j + 1 < M[i].length) {
        temp += M[i + 1][j + 1]
        cnt++
      }

      newImage[i][j] = Math.floor(temp / cnt)
    }
  }

  return newImage
}

imageSmoother([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]])