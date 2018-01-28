/**
 * Created by Clovin on 29/01/2018.
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let temp = new Map()

  for (let i = 0; i < S.length; i++) {
    if (!temp.has(S[i])) {
      temp.set(S[i], 1)
    } else {
      temp.set(S[i], temp.get(S[i]) + 1)
    }
  }

  let sum = 0
  for (let i = 0; i < J.length; i++) {
    if (temp.has(J[i])) {
      sum += temp.get(J[i])
    }
  }

  return sum
}
