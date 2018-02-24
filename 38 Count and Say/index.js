/**
 * Created by Clovin on 25/02/2018.
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1'
  for (let i = 2; i <= n; i++) {
    let tempRes = ''
    let temp = result[0]
    let cnt = 1
    for (let j = 1; j < result.length; j++) {
      if (result[j] === temp) {
        cnt++
      } else {
        tempRes += cnt
        tempRes += temp
        temp = result[j]
        cnt = 1
      }
    }

    if (result[result.length-1] === temp) {
      tempRes += cnt
      tempRes += temp
    }

    result = tempRes
  }

  return result
}
