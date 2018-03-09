/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let tempTime = []
  for (let i = 0; i < timePoints.length; i++) {
    tempTime.push(timePoints[i].split(':').map(item => parseInt(item)))
  }

  tempTime.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

  let min = 999999999
  for (let i = 1; i < tempTime.length; i++) {
    let temp = (tempTime[i][0] - tempTime[i - 1][0]) * 60 + (tempTime[i][1] - tempTime[i - 1][1])
    if (temp < min) {
      min = temp
    }
  }
  if (0 !== tempTime.length - 1) {
    let temp = (tempTime[0][0] + 24 - tempTime[tempTime.length - 1][0]) * 60 + (tempTime[0][1] - tempTime[tempTime.length - 1][1])
    if (temp < min) {
      min = temp
    }
  }

  return min === 999999999 ? 0 : min
}
