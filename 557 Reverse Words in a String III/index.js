/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = s.split(' ')
  for (let i = 0; i < temp.length; i++) {
    let tempWord = temp[i].split('').reverse()
    temp[i] = tempWord.join('')
  }
  return temp.join(' ')
}