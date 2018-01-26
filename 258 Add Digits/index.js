/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let tempNum = 0
  let temp = num.toString()
  for (let i = 0; i < temp.length; i++) {
    tempNum += parseInt(temp[i])
  }
  return num < 10 ? num : addDigits(tempNum)
}

console.log(addDigits(38))