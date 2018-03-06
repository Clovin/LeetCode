/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) {
    return 0
  }

  let time = 0
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] >= duration) {
      time += duration
    } else {
      time += timeSeries[i] - timeSeries[i - 1]
    }
  }

  return time + duration
}
