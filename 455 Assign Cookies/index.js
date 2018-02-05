/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let cnt = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let j = 0
  for (let i = 0; i < g.length; i++) {
    while (j < s.length && s[j] < g[i]) {
      j++
    }

    if (j >= s.length) {
      break
    }

    cnt++
    j++
  }

  return cnt
}
