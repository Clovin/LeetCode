/**
 * Created by Clovin on 11/03/2018.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false
  }

  if (A.length === 0 && B.length === 0) {
    return true
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[0]) {
      let indexB = 1
      let flag = true
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] !== B[indexB++]) {
          flag = false
          break
        }
      }

      if (flag) {
        for (let j = 0; j < i; j++) {
          if (A[j] !== B[indexB++]) {
            flag = false
            break
          }
        }

        return true
      }
    }
  }

  return false
}
