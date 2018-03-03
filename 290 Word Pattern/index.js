/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let reflect = new Map()
  let used = new Set()

  let temp = str.split(' ')
  if (temp.length !== pattern.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (reflect.has(pattern[i])) {
      if (temp[i] === reflect.get(pattern[i])) {
        continue
      }

      return false
    } else {
      if (used.has(temp[i])) {
        return false
      }

      used.add(temp[i])
      reflect.set(pattern[i], temp[i])
    }
  }

  return true
}
