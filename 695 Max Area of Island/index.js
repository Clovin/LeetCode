/**
 * Created by Clovin on 01/02/2018.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let queue = []
  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let temp = 0

      if (grid[i][j] === 1) {
        queue.push([i, j])
        grid[i][j] = 0
        temp = 1
      }

      while (queue.length !== 0) {
        let tempPoint = queue.shift()

        // left
        if (tempPoint[1] - 1 >= 0 && grid[tempPoint[0]][tempPoint[1] - 1] === 1) {
          temp++
          grid[tempPoint[0]][tempPoint[1] - 1] = 0
          queue.push([tempPoint[0], tempPoint[1] - 1])
        }

        // bottom
        if (tempPoint[0] + 1 < grid.length && grid[tempPoint[0] + 1][tempPoint[1]] === 1) {
          temp++
          grid[tempPoint[0] + 1][tempPoint[1]] = 0
          queue.push([tempPoint[0] + 1, tempPoint[1]])
        }

        // right
        if (tempPoint[1] + 1 < grid[i].length && grid[tempPoint[0]][tempPoint[1] + 1] === 1) {
          temp++
          grid[tempPoint[0]][tempPoint[1] + 1] = 0
          queue.push([tempPoint[0], tempPoint[1] + 1])
        }

        // top
        if (tempPoint[0] - 1 >= 0 && grid[tempPoint[0] - 1][tempPoint[1]] === 1) {
          temp++
          grid[tempPoint[0] - 1][tempPoint[1]] = 0
          queue.push([tempPoint[0] - 1, tempPoint[1]])
        }
      }

      if (temp > result) {
        result = temp
      }
    }
  }

  return result
}
