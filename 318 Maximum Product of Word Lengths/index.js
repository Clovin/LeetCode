/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  words.sort((a, b) => b.length - a.length)

  let result = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length * words[j].length < result) {
        break
      }

      if (words[i].search(new RegExp(words[j].split('').join('|'))) === -1) {
        result = words[i].length * words[j].length
      }
    }
  }

  return result
}
