/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let x = 0
  let y = 0

  if (ops.length === 0) {
    return m * n
  }

  ops.sort((a, b) => a[0] - b[0])
  x = ops[0][0]

  ops.sort((a, b) => a[1] - b[1])
  y = ops[0][1]

  return x * y
}
