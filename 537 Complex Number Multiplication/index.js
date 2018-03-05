/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  let tempA = a.split('+')
  let tempB = b.split('+')

  tempA[1] = tempA[1].slice(0, tempA[1].length - 1)
  tempB[1] = tempB[1].slice(0, tempB[1].length - 1)

  tempA[0] = parseInt(tempA[0])
  tempA[1] = parseInt(tempA[1])
  tempB[0] = parseInt(tempB[0])
  tempB[1] = parseInt(tempB[1])

  return (tempA[0] * tempB[0] - tempA[1] * tempB[1]) + '+' + (tempA[0] * tempB[1] + tempA[1] * tempB[0]) + 'i'
}
