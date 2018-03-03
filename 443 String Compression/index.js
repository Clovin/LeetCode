/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let begin = 0
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== chars[i - 1]) {
      chars.splice(begin + 1, i - begin - 1, ...(i - begin > 1 ? ((i - begin) + '').split('') : ''))
      i = begin + (i - begin > 1 ? ((i - begin) + '').split('') : '').length + 1
      begin = i
    }
  }
  if (begin !== chars.length - 1) {
    chars.splice(begin + 1, chars.length - begin - 1, ...(chars.length - begin > 1 ? ((chars.length - begin) + '').split('') : ''))
  }

  return chars.length
}
