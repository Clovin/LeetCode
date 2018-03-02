/**
 * Created by Clovin on 02/03/2018.
 */
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let result = 0
  for (let j = 1; j <= N; j++) {
    let temp = j.toString()
    let flag = false
    for (let i = 0; i < temp.length; i++) {
      if (['2', '5', '6', '9'].includes(temp[i])) {
        flag = true
      } else if (['2', '3', '4', '7'].includes(temp[i])) {
        flag = false
        break
      }
    }
    if (flag) {
      result++
    }
  }

  return result
}
