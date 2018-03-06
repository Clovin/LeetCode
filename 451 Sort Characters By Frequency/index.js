/**
 * Created by Clovin on 06/03/2018.
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let tempMap = new Map()
  for (let i = 0; i < s.length; i++) {
    if (tempMap.has(s[i])) {
      tempMap.set(s[i], tempMap.get(s[i]) + 1)
    } else {
      tempMap.set(s[i], 1)
    }
  }

  let resultMap = new Map()
  for (let [key, value] of tempMap) {
    if (resultMap.has(value)) {
      if (resultMap.get(value).indexOf(key) === -1) {
        let temp = resultMap.get(value)
        temp.push(key)
        resultMap.set(value, temp)
      }
    } else {
      resultMap.set(value, [key])
    }
  }

  let resultIndex = []
  for (let [key, value] of resultMap) {
    resultIndex.push(key)
  }

  resultIndex.sort((a, b) => b - a)

  let result = []
  for (let i = 0; i < resultIndex.length; i++) {
    let temp = resultMap.get(resultIndex[i])
    for (let j = 0; j < temp.length; j++) {
      for (let k = 0; k < resultIndex[i]; k++) {
        result.push(temp[j])
      }
    }
  }

  return result.join('')
}
