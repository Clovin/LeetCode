/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let license = new Map()
  for (let i = 0; i < licensePlate.length; i++) {
    if (licensePlate[i].toLowerCase() >= 'a' && licensePlate.toLowerCase() <= 'z') {
      if (license.has(licensePlate[i].toLowerCase())) {
        license.set(licensePlate[i].toLowerCase(), license.get(licensePlate[i].toLowerCase()) + 1)
      } else {
        license.set(licensePlate[i].toLowerCase(), 1)
      }
    }
  }

  let result = null
  for (let i = 0; i < words.length; i++) {
    let flag = true
    for (let [key, value] of license) {
      let cnt = 0
      let j = 0
      for (; j < words[i].length; j++) {
        if (words[i][j] === key) {
          cnt++
        }
        if (cnt === value) {
          break
        }
      }
      if (j === words[i].length) {
        flag = false
        break
      }
    }

    if (flag) {
      if (result === null) {
        result = words[i]
      } else {
        if (words[i].length < result.length) {
          result = words[i]
        }
      }
    }
  }

  return result
}
