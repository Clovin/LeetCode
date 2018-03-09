/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  if (input.search(/\+|-|\*/) === -1) {
    return [parseInt(input)]
  }
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (['-', '+', '*'].includes(input[i])) {
      let left = diffWaysToCompute(input.slice(0, i))
      let right = diffWaysToCompute(input.slice(i + 1))

      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          if (input[i] === '-') {
            if (right[k] < 0) {
              result.push(eval(left[j] + '+' + (-right[k])))
            } else {
              result.push(eval(left[j] + '-' + right[k]))
            }
          } else {
            result.push(eval(left[j].toString() + input[i] + (right[k]).toString()))
          }
        }
      }
    }
  }

  return result
}
