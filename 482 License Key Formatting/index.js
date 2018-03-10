/**
 * Created by Clovin on 11/03/2018.
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  while (S.includes('-')) {
    S = S.replace('-', '')
  }

  let cnt = 0
  for (let i = S.length - 1; i >= 0; i--) {
    cnt++
    if (cnt === K && i !== 0) {
      S = S.slice(0, i) + '-' + S.slice(i)
      cnt = 0
    }
  }

  return S.toUpperCase()
}
