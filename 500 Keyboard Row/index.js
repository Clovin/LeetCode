/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let temp = []

  words.forEach(word => {
    if (/(^[qwertyuiop]*$)|(^[asdfghjkl]*$)|(^[zxcvbnm]*$)/i.test(word)) {
      temp.push(word)
    }
  })

  return temp
}
