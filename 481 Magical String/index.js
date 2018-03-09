/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  if (n === 0) {
    return 0
  }

  if (n <= 3) {
    return 1
  }

  let tempStr = '2'
  let isOne = true
  let cnt = 3
  let result = 1
  while (cnt + parseInt(tempStr[0]) < n) {
    let num = parseInt(tempStr[0])
    tempStr = tempStr.slice(1)
    for (let i = 0; i < num; i++) {
      tempStr += isOne ? '1' : '2'
    }
    result += isOne ? num : 0
    cnt += num
    isOne = !isOne
  }

  return isOne ? result + (n - cnt) : result
}
