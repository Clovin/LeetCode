/**
 * Created by Clovin on 18/02/2018.
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0

  for (let i = 0; i < points.length; i++) {
    let distance = new Map()

    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue
      }

      let tempDis = (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]) + (points[i][1] - points[j][1]) * (points[i][1] - points[j][1])

      if (distance.has(tempDis)) {
        distance.set(tempDis, distance.get(tempDis) + 1)
      } else {
        distance.set(tempDis, 1)
      }
    }

    for (let [dis, cnt] of distance.entries()) {
      result += cnt * (cnt - 1)
    }
  }

  return result
}
