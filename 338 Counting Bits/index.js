/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  if (num === 0) {
    return [0]
  }

  if (num === 1) {
    return [0, 1]
  }

  let result = [0, 1]
  let temp = [1, 2]
  let add = [2]
  let j = 0

  for (let i = 2; i <= num; i++) {
    result.push(temp[j++])
    if (j === temp.length) {
      let len = add.length

      for (let k = 0; k < len; k++) {
        temp.push(add[k])
      }

      for (let k = 0; k < len; k++) {
        temp.push(add[k] + 1)
        add.push(add[k] + 1)
      }

      j = 0
    }
  }

  return result
}
