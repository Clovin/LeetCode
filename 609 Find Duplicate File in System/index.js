/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let pathMap = new Map()
  for (let i = 0; i < paths.length; i++) {
    let temp = paths[i].split(' ')
    for (let j = 1; j < temp.length; j++) {
      let str = temp[j].match(/(^.+\.txt)\((.+)\)$/)
      if (pathMap.has(str[2])) {
        let newArr = pathMap.get(str[2])
        newArr.push(temp[0] + '/' + str[1])
        pathMap.set(str[2], newArr)
      } else {
        pathMap.set(str[2], [temp[0] + '/' + str[1]])
      }
    }
  }

  let result = []
  for (let [key, value] of pathMap.entries()) {
    if (value.length === 1) {
      continue
    }

    let temp = []
    for (let i = 0; i < value.length; i++) {
      temp.push(value[i])
    }
    result.push(temp)
  }

  return result
}
