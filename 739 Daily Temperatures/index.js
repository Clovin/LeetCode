/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let result = []

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i)
        break
      }
    }

    if (result.length !== i + 1) {
      result.push(0)
    }
  }

  return result
}
