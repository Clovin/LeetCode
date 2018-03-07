/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let tempAB = new Map()
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let temp = A[i] + B[j]
      if (tempAB.has(temp)) {
        tempAB.set(temp, tempAB.get(temp) + 1)
      } else {
        tempAB.set(temp, 1)
      }
    }
  }

  let tempCD = new Map()
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let temp = C[i] + D[j]
      if (tempCD.has(temp)) {
        tempCD.set(temp, tempCD.get(temp) + 1)
      } else {
        tempCD.set(temp, 1)
      }
    }
  }

  let result = 0
  for (let [key, value] of tempAB.entries()) {
    if (tempCD.has(-key)) {
      result += tempCD.get(-key) * value
    }
  }

  return result
}
