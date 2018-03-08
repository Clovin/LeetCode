/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let result = 0
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      let j = i + 1
      for (; j < arr.length; j++) {
        if (arr[j] < max) {
          break
        }
      }
      if (j === arr.length) {
        result++
      }

      max = arr[i]
    }
  }
  if (arr[arr.length - 1] <= max) {
    result++
  }

  return result
}
