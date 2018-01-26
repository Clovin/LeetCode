/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let tempS = Array.from(s).sort().join('')
  let tempT = Array.from(t).sort().join('')

  for (let i = 0; i <= tempT.length; i++) {
    if (tempS[i] === tempT[i]) {
      continue
    }

    return tempT[i]
  }
}

console.log(findTheDifference('abcd', 'abcde'))