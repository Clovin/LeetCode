/**
 * Created by Clovin on 26/02/2018.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = []
  let i = a.length - 1
  let j = b.length - 1
  let flag = false
  while (i >= 0 && j >= 0) {
    if (a[i] === '0' && b[j] === '0') {
      result.unshift(flag ? '1' : '0')
      flag = false
    } else if ((a[i] === '0' && b[j] === '1') || (a[i] === '1' && b[j] === '0')) {
      if (flag) {
        result.unshift('0')
        flag = true
      } else {
        result.unshift('1')
        flag = false
      }
    } else if (a[i] === '1' && b[j] === '1') {
      if (flag) {
        result.unshift('1')
      } else {
        result.unshift('0')
      }
      flag = true
    }

    i--
    j--
  }

  if (i >= 0) {
    for (; i >= 0; i--) {
      if (a[i] === '1' && flag) {
        result.unshift('0')
        flag = true
      } else if (a[i] === '0' && flag) {
        result.unshift('1')
        flag = false
      } else {
        result.unshift(a[i])
      }
    }
  }

  if (j >= 0) {
    for (; j >= 0; j--) {
      if (b[j] === '1' && flag) {
        result.unshift('0')
        flag = true
      } else if (b[j] === '0' && flag) {
        result.unshift('1')
        flag = false
      } else {
        result.unshift(b[j])
      }
    }
  }

  if (flag) {
    result.unshift('1')
  }

  return result.join('')
}
