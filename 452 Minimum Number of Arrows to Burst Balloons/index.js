/**
 * Created by Clovin on 17/03/2018.
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0
  }

  points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

  let result = 0
  let start = points[0][0]
  let end = points[0][1]
  for (let i = 1; i < points.length; i++) {
    if ((points[i][0] >= start && points[i][0] <= end) || (points[i][1] >= start && points[i][1] <= end)) {
      if (points[i][0] > start) {
        start = points[i][0]
      }

      if (points[i][1] < end) {
        end = points[i][1]
      }
      continue
    }

    result++
    start = points[i][0]
    end = points[i][1]
  }

  return ++result
}
