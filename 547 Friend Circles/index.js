/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  let setArray = []
  for (let i = 0; i < M.length; i++) {
    let connectSet = new Set()
    let temp = []
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 1) {
        temp.push(j)
        for (let k = 0; k < setArray.length; k++) {
          if (setArray[k] === null) {
            continue
          }

          if (setArray[k].has(j)) {
            connectSet.add(k)
          }
        }
      }
    }

    if (connectSet.size > 0) {
      let iterator = connectSet[Symbol.iterator]()
      let first = iterator.next().value
      let tempIndex = iterator.next().value
      while (tempIndex) {
        for (let [key] of setArray[tempIndex].entries()) {
          setArray[first].add(key)
        }

        setArray[tempIndex] = null
        tempIndex = iterator.next().value
      }

      for (let j = 0; j < temp.length; j++) {
        setArray[first].add(temp[j])
      }
    } else {
      let tempSet = new Set()
      for (let j = 0; j < temp.length; j++) {
        tempSet.add(temp[j])
      }
      setArray.push(tempSet)
    }
  }

  let result = 0
  for (let i = 0; i < setArray.length; i++) {
    if (setArray[i] !== null) {
      result++
    }
  }

  return result
}
