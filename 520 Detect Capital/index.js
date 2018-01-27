/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return /(^[A-Z]*$)|(^[a-z]*$)|(^[A-Z][a-z]*$)/.test(word)
}