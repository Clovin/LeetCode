/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let result = 0

  let cnt = 2
  let gap = A[1] - A[0]
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === gap) {
      cnt++
      continue
    }

    if (cnt >= 3) {
      for (let j = 3; j <= cnt; j++) {
        result += cnt - j + 1
      }
    }

    gap = A[i] - A[i - 1]
    cnt = 2
  }

  if (cnt >= 3) {
    for (let i = 3; i <= cnt; i++) {
      result += cnt - i + 1
    }
  }

  return result
}

