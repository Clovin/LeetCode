/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let lFlag = 0
  let aFlag = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      if (aFlag) {
        return false
      } else {
        aFlag = true
      }
    }

    if (s[i] === 'L') {
      if (lFlag === 0) {
        lFlag = 1
        continue
      } else if (lFlag === 1) {
        lFlag = 2
        continue
      } else {
        return false
      }
    }

    lFlag = 0
  }

  return true
}

checkRecord('PPALLP')