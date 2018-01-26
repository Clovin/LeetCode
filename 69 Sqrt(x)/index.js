/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number} x
 * @return {number}
 */
let temp = [0, 1, 4]

var mySqrt = function (x) {
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > x) {
      return i - 1
    }
  }

  let index = temp.length
  do {
    temp[index] = index * index
  } while (temp[index++] <= x)

  return index - 2
}