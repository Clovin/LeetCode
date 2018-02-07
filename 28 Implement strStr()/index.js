/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1
      for (; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break
        }
      }

      if (j === needle.length) {
        return i
      }
    }
  }

  return -1
}
