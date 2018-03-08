/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1
  } else if (n === 1) {
    return 10
  } else if (n === 2) {
    return 91
  } else {
    let result = 91
    for (let i = 3; i <= (n > 10 ? 10 : n); i++) {
      let sum = 9
      let temp = 9
      for (let j = i - 1; j >= 1; j--) {
        sum *= temp--
      }
      result += sum
    }
    return result
  }
}
