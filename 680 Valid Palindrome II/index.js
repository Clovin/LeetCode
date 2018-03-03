/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let end = s.length - 1
  let start = 0

  let flag = true
  let str1
  let str2
  while (end > start) {
    if (s[end] === s[start]) {
      start++
      end--
    } else {
      flag = false
      str1 = s.slice(start, end)
      str2 = s.slice(start + 1, end + 1)
      break
    }
  }
  if (flag) {
    return true
  }

  end = str1.length - 1
  start = 0
  while (end > start) {
    if (str1[end] === str1[start]) {
      start++
      end--
    } else {
      break
    }
  }
  if (end <= start) {
    return true
  }

  end = str2.length - 1
  start = 0
  while (end > start) {
    if (str2[end] === str2[start]) {
      start++
      end--
    } else {
      break
    }
  }
  return end <= start
}
