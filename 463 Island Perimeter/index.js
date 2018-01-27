/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 1) {
        continue
      }

      // top
      if (i - 1 < 0 || grid[i - 1][j] === 0) {
        perimeter++
      }

      // right
      if (j + 1 === grid[i].length || grid[i][j + 1] === 0) {
        perimeter++
      }

      // bottom
      if (i + 1 === grid.length || grid[i + 1][j] === 0) {
        perimeter++
      }

      // left
      if (j - 1 < 0 || grid[i][j - 1] === 0) {
        perimeter++
      }
    }
  }

  return perimeter
}