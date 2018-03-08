/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let flag = []
  for (let i = 0; i < expression.length; i++) {
    if (['+', '-'].includes(expression[i])) {
      flag.push(expression[i])
    }
  }

  let tempArr = expression.split(/\+|-/)
  let result = [parseInt(tempArr[0].split(/\//)[0]), parseInt(tempArr[0].split(/\//)[1])]
  if (expression[0] === '-') {
    flag.shift()
    tempArr.shift()
    result = [-parseInt(tempArr[0].split(/\//)[0]), parseInt(tempArr[0].split(/\//)[1])]
  }
  for (let i = 1; i < tempArr.length; i++) {
    let temp = [parseInt(tempArr[i].split(/\//)[0]), parseInt(tempArr[i].split(/\//)[1])]
    if (result[1] === temp[1]) {
      result[0] = flag.shift() === '+' ? result[0] + temp[0] : result[0] - temp[0]
    } else {
      result[0] = flag.shift() === '+' ? result[0] * temp[1] + result[1] * temp[0] : result[0] * temp[1] - result[1] * temp[0]
      result[1] *= temp[1]
    }
  }

  if (result[0] === 0) {
    return '0/1'
  }
  let max = Math.abs(result[0]) > Math.abs(result[1]) ? Math.abs(result[1]) : Math.abs(result[0])
  for (let i = max; i >= 2; i--) {
    while (result[0] % i === 0 && result[1] % i === 0) {
      result[0] /= i
      result[1] /= i
    }
  }
  return result[0] + '/' + result[1]
}
