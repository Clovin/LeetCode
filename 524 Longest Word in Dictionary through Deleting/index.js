/**
 * Created by Clovin on 18/03/2018.
 */
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let result = ''

  d.sort((a, b) => a.localeCompare(b))

  for (let i = 0; i < d.length; i++) {
    let [j, k] = [0, 0]
    for (; j < d[i].length; j++) {
      while (k < s.length) {
        if (s[k] === d[i][j]) {
          k++
          break
        }

        k++
      }

      if (k === s.length) {
        if (s[k - 1] === d[i][j]) {
          j++
        }
        break
      }
    }

    if (j === d[i].length) {
      if (d[i].length > result.length) {
        result = d[i]
      }
    }
  }

  return result
}
