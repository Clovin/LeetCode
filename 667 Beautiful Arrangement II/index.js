/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let result = []

  let begin = 1
  let end = n
  let cnt = 0
  let isBegin = true
  while (cnt !== k) {
    if (isBegin) {
      result.push(begin++)
    } else {
      result.push(end--)
    }

    isBegin = !isBegin
    cnt++
  }

  if (!isBegin) {
    for (let i = begin; i <= end; i++) {
      result.push(i)
    }
  } else {
    for (let i = end; i >= begin; i--) {
      result.push(i)
    }
  }

  return result
}
