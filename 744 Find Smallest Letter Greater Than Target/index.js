/**
 * Created by Clovin on 05/02/2018.
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i]
    }
  }

  return letters[0]
}
