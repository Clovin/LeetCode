/**
 * Created by Clovin on 05/03/2018.
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)

  let minRadius = -1
  let i = 0
  let j = 0
  for (; i < houses.length; i++) {
    while (1) {
      if (j + 1 === heaters.length) {
        break
      }

      if (heaters[j + 1] < houses[i]) {
        j++
        continue
      }

      if (heaters[j] < houses[i]) {
        let temp = Math.abs(heaters[j + 1] - houses[i]) > Math.abs(heaters[j] - houses[i]) ? Math.abs(heaters[j] - houses[i]) : Math.abs(heaters[j + 1] - houses[i])
        if (temp > minRadius) {
          minRadius = temp
        }
      } else {
        let temp = Math.abs(heaters[j] - houses[i])
        if (temp > minRadius) {
          minRadius = temp
        }
      }
      break
    }

    if (j + 1 === heaters.length) {
      break
    }
  }

  for (; i < houses.length; i++) {
    let temp = Math.abs(heaters[j] - houses[i])
    if (temp > minRadius) {
      minRadius = temp
    }
  }

  return minRadius
}
