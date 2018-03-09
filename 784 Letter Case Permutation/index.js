/**
 * Created by Clovin on 10/03/2018.
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let result = [S]

  search(S, 0, result)

  return result
}

function search (s, index, result) {
  if (index === s.length) {
    return
  }

  if (s[index].search(/[a-z]/i) !== -1) {
    let oldS = s
    let newS = s.slice(0, index) + (s[index] <= 'Z' ? s[index].toLowerCase() : s[index].toUpperCase()) + s.slice(index + 1)
    result.push(newS)

    search(oldS, index + 1, result)
    search(newS, index + 1, result)
  } else {
    search(s, index + 1, result)
  }
}
