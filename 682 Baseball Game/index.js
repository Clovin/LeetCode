/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let valid = []
  let sum = 0

  ops.forEach(op => {
    if (op === '+') {
      let temp = valid[0] + valid[1]
      sum += temp
      valid.unshift(temp)
      return
    }

    if (op === 'D') {
      let temp = valid[0] * 2
      sum += temp
      valid.unshift(temp)
      return
    }

    if (op === 'C') {
      sum -= valid[0]
      valid.shift()
      return
    }

    sum += parseInt(op)
    valid.unshift(parseInt(op))
  })

  return sum
}