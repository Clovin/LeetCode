/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])

  let result = []

  for (let i = 0; i < people.length; i++) {
    let cnt = 0
    let j = 0
    for (; j < result.length; j++) {
      if (people[i][1] === cnt) {
        for (; j < result.length; j++) {
          if (result[j][1] !== people[i][1]) {
            break
          }
        }
        break
      }

      if (result[j][0] >= people[i][0]) {
        cnt++
      }
    }

    result.splice(j, 0, people[i])
  }

  return result
}
