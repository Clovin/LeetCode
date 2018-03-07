/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  let temp = sentence.split(' ')
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < dict.length; j++) {
      if (temp[i].search(new RegExp(dict[j], 'y')) !== -1) {
        temp[i] = dict[j]
        break
      }
    }
  }
  return temp.join(' ')
}
