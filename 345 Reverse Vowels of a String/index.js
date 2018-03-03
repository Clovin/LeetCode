/**
 * Created by Clovin on 03/03/2018.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let j = s.length - 1
  for (let i = 0; i < j; i++) {
    if (['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].includes(s[i])) {
      for (; j > i; j--) {
        if (['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].includes(s[j])) {
          let temp = s[i]
          s = s.slice(0, i) + s[j] + s.slice(i + 1)
          s = s.slice(0, j) + temp + s.slice(j + 1)
          j--
          break
        }
      }
    }
  }

  return s
}
