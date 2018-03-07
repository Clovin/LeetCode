/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let tempMap = new Map()
  for (let i = 0; i < answers.length; i++) {
    if (tempMap.has(answers[i])) {
      tempMap.set(answers[i], tempMap.get(answers[i]) + 1)
    } else {
      tempMap.set(answers[i], 1)
    }
  }

  let result = 0
  for (let [key, value] of tempMap.entries()) {
    result += (key + 1) * Math.ceil(value / (key + 1))
  }

  return result
}
