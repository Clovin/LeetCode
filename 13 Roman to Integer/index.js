/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0
  let plus = true
  let prev = 1000
  for (let i = 0; i < s.length; i++) {
    let temp
    if (s[i] === 'M') {
      temp = 1000
    } else if (s[i] === 'D') {
      temp = 500
    } else if (s[i] === 'C') {
      temp = 100
    } else if (s[i] === 'L') {
      temp = 50
    } else if (s[i] === 'X') {
      temp = 10
    } else if (s[i] === 'V') {
      temp = 5
    } else {
      temp = 1
    }

    if (temp > prev) {
      plus = false
    } else {
      plus = true
    }

    if (plus) {
      result += temp
    } else {
      result -= prev
      result += temp - prev
    }

    prev = temp
  }

  return result
}
