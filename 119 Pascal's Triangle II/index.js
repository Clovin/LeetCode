/**
 * Created by Clovin on 28/02/2018.
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let temp = [1]
  for (let i = 1; i <= rowIndex; i++) {
    temp[i] = 1
    let tempNum = temp[0]
    for (let j = 1; j < i; j++) {
      let tempNum1 = temp[j]
      temp[j] = tempNum + temp[j]
      tempNum = tempNum1
    }
  }

  return temp
}
