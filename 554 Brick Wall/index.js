/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let width = 0
  for (let i = 0; i < wall[0].length; i++) {
    width += wall[0][i]
  }

  let map = new Map()
  for (let i = 0; i < wall.length; i++) {
    let begin = 0
    for (let j = 0; j < wall[i].length; j++) {
      if (begin + wall[i][j] < width) {
        if (map.has(begin + wall[i][j])) {
          map.set(begin + wall[i][j], map.get(begin + wall[i][j]) + 1)
        } else {
          map.set(begin + wall[i][j], 1)
        }
        begin += wall[i][j]
      }
    }
  }

  let max = 0
  for (let [key, value] of map.entries()) {
    if (value > max) {
      max = value
    }
  }
  return wall.length - max
}
