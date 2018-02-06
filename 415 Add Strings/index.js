/**
 * Created by Clovin on 06/02/2018.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num2.length > num1.length) {
    let temp = num1
    num1 = num2
    num2 = temp
  }

  let result = []
  let j = num2.length - 1
  let flag = false
  for (let i = num1.length - 1; i >= 0; i--) {
    if (j < 0 && i >= 0) {
      let temp = parseInt(num1[i]) + (flag ? 1 : 0)
      if (temp >= 10) {
        temp -= 10
        flag = true
      } else {
        flag = false
      }
      result.unshift(temp.toString())
      continue
    }

    let temp = parseInt(num1[i]) + parseInt(num2[j]) + (flag ? 1 : 0)
    if (temp >= 10) {
      temp -= 10
      flag = true
    } else {
      flag = false
    }

    j--
    result.unshift(temp.toString())
  }

  if (flag === true) {
    result.unshift('1')
  }

  return result.join('')
}

addStrings('9333852702227987',
  '85731737104263')