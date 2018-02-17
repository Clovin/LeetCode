/**
 * Created by Clovin on 17/02/2018.
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc]
  let queue = []

  if (oldColor === newColor) {
    return image
  }

  image[sr][sc] = newColor
  queue.push([sr, sc])
  while (queue.length !== 0) {
    let tempPoint = queue.shift()

    // top
    if (tempPoint[0] - 1 >= 0 && image[tempPoint[0] - 1][tempPoint[1]] === oldColor) {
      image[tempPoint[0] - 1][tempPoint[1]] = newColor
      queue.push([tempPoint[0] - 1, tempPoint[1]])
    }

    // right
    if (tempPoint[1] + 1 < image[tempPoint[0]].length && image[tempPoint[0]][tempPoint[1] + 1] === oldColor) {
      image[tempPoint[0]][tempPoint[1] + 1] = newColor
      queue.push([tempPoint[0], tempPoint[1] + 1])
    }

    // bottom
    if (tempPoint[0] + 1 < image.length && image[tempPoint[0] + 1][tempPoint[1]] === oldColor) {
      image[tempPoint[0] + 1][tempPoint[1]] = newColor
      queue.push([tempPoint[0] + 1, tempPoint[1]])
    }

    // left
    if (tempPoint[1] - 1 >= 0 && image[tempPoint[0]][tempPoint[1] - 1] === oldColor) {
      image[tempPoint[0]][tempPoint[1] - 1] = newColor
      queue.push([tempPoint[0], tempPoint[1] - 1])
    }
  }

  return image
}
