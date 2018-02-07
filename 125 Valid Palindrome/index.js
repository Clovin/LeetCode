/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let temp = s.replace(/[^A-Za-z0-9_]/g, '').toLowerCase()
  return temp === temp.split('').reverse().join('')
}
