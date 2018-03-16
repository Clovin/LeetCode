/**
 * Created by Clovin on 17/03/2018.
 */
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  if (n === 0) {
    return []
  }

  let tempMap = new Map()
  let stash = []
  let first = logs[0].match(/^([0-9]+):(start|end):([0-9]+)$/)
  let preTime = parseInt(first[3])
  let isStart = true
  stash.push(first)
  tempMap.set(first[1], 0)
  for (let i = 1; i < logs.length; i++) {
    let temp = logs[i].match(/^([0-9]+):(start|end):([0-9]+)$/)
    if (temp[2] === 'start') {
      if (isStart) {
        tempMap.set(stash[stash.length - 1][1], tempMap.get(stash[stash.length - 1][1]) + parseInt(temp[3]) - preTime)
      } else {
        if (stash.length !== 0) {
          tempMap.set(stash[stash.length - 1][1], tempMap.get(stash[stash.length - 1][1]) + parseInt(temp[3]) - preTime - 1)
        }
      }

      stash.push(temp)
      if (!tempMap.has(temp[1])) {
        tempMap.set(temp[1], 0)
      }
      isStart = true
    } else {
      if (isStart) {
        tempMap.set(temp[1], tempMap.get(temp[1]) + parseInt(temp[3]) - preTime + 1)
      } else {
        tempMap.set(temp[1], tempMap.get(temp[1]) + parseInt(temp[3]) - preTime)
      }

      stash.pop()
      isStart = false
    }
    preTime = parseInt(temp[3])
  }

  let result = []
  for (let [key, value] of tempMap.entries()) {
    result[parseInt(key)] = value
  }

  return result
}
