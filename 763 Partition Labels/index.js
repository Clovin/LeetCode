/**
 * Created by Clovin on 05/03/2018.
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let begin = 0
  let end = S.lastIndexOf(S[0])
  let result = []
  let map = new Map()
  map.set(S[0], [begin, end])
  while (end !== S.length - 1) {
    for (let i = begin; i < end; i++) {
      if (map.has(S[i])) {
        continue
      }

      let tempEnd = S.lastIndexOf(S[i])
      if (tempEnd > end) {
        end = tempEnd
      }
      map.set(S[i], [i, tempEnd])
    }

    result.push(end - begin + 1)
    if (end !== S.length - 1) {
      begin = end + 1
      end = S.lastIndexOf(S[begin])
    } else {
      begin = -1
      end = -1
      break
    }
  }
  if (begin === end && begin === -1) {
    return result
  }

  result.push(end - begin + 1)
  return result
}
