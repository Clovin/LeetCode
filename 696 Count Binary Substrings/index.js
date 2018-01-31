/**
 * Created by Clovin on 31/01/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let sum = 0

  if (s === '' || s.length === 1) {
    return 0
  }

  let temp = []
  let flag = s[0]
  let cnt = 1
  for (let i = 1; i < s.length; i++) {
    if (flag !== s[i]) {
      temp.push(cnt)
      cnt = 1
      flag = s[i]
      continue
    }

    cnt++
  }

  if (cnt) {
    temp.push(cnt)
  }

  if (temp.length === 1) {
    return 0
  }

  for (let i = 1; i < temp.length; i++) {
    sum += temp[i] > temp[i - 1] ? temp[i - 1] : temp[i]
  }

  return sum
}


