/**
 * Created by Clovin on 05/03/2018.
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  let temp = T.split('').sort((a, b) => {
    return S.indexOf(a) - S.indexOf(b)
  }).join('')
  return temp
}
