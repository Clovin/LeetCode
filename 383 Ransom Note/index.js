/**
 * Created by Clovin on 04/02/2018.
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote.split('').sort((a, b) => a - b).join('')
  magazine.split('').sort((a, b) => a - b).join('')

  for (let i = 0; i < ransomNote.length; i++) {
    let index = magazine.indexOf(ransomNote[i])
    if (index === -1) {
      return false
    }

    magazine = magazine.substring(0, index) + magazine.substring(index + 1)
  }

  return true
}
