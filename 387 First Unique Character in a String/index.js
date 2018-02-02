/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let tempMap1 = new Map()
  let tempMap2 = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!tempMap1.has(s[i])) {
      tempMap1.set(s[i], 1)
      tempMap2.set(s[i], i)
      continue
    }

    tempMap1.set(s[i], tempMap1.get(s[i]) + 1)
  }

  for (let [key, value] of tempMap1) {
    if (value === 1) {
      return tempMap2.get(key)
    }
  }

  return -1
}
