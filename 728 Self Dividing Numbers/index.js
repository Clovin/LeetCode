/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let array = []

  for (let i = left; i <= right; i++) {
    let flag = true
    let temp = i.toString()

    for (let j = 0; j < temp.length; j++) {
      if (i % parseInt(temp[j]) !== 0) {
        flag = false
        break
      }
    }

    flag && array.push(i)
  }

  return array
}