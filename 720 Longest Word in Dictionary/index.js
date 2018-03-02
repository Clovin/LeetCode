/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let tempMap = new Map()
  let result = ''
  let max = 0

  words.sort((a, b) => a.localeCompare(b))

  for (let i = 0; i < words.length; i++) {
    let temp = words[i].slice(0, words[i].length - 1)

    if (tempMap.has(temp)) {
      tempMap.set(words[i], tempMap.get(temp) + 1)

      if (tempMap.get(words[i]) > max) {
        max = tempMap.get(words[i])
        result = words[i]
      }
    }

    if (!tempMap.has(words[i]) && words[i].length === 1) {
      tempMap.set(words[i], 0)
    }
  }

  return result === '' ? words[0] : result
}
