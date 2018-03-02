/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let tempSet = new Set()

  while (n !== 1) {
    let temp = n
    n = 0
    while (temp > 0) {
      n += Math.pow(temp % 10, 2)
      temp = Math.floor(temp / 10)
    }

    if (tempSet.has(n)) {
      return false
    }

    tempSet.add(n)
  }

  return true
}
