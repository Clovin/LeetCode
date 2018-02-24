/**
 * Created by Clovin on 24/02/2018.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stash = []

  for (let i = 0; i < s.length; i++) {
    if (['[', '{', '('].includes(s[i])) {
      stash.push(s[i])
      continue
    }

    if (['}', ']', ')'].includes(s[i])) {
      if (['}', ']', ')'].indexOf(s[i]) === ['{', '[', '('].indexOf(stash.pop())) {
        continue
      }

      return false
    }
  }

  return stash.length === 0
}
