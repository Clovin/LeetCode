/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = []

  search(0, s, p, p, result)

  return result
}

function search (index, s, p, nowP, result) {
  if (index === s.length) {
    return
  }

  if (nowP.includes(s[index])) {
    let newP = nowP
    let i = newP.indexOf(s[index])
    newP = newP.slice(0, i) + newP.slice(i + 1)

    if (newP.length === 0) {
      result.push(index - p.length + 1)

      newP = s[index - p.length + 1]

      search(index + 1, s, p, newP, result)
    } else {
      search(index + 1, s, p, newP, result)
    }
  } else if (p.includes(s[index])) {
    let newP = nowP

    newP += s[index - nowP.length - 1]

    search(index, s, p, newP, result)
  } else {
    search(index + 1, s, p, p, result)
  }
}
