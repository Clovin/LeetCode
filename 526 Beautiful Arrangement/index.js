/**
 * Created by Clovin on 13/03/2018.
 */
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  let result = {
    cnt: 0
  }

  search(1, [], N, result)

  return result.cnt
}

function search (index, nowArr, N, result) {
  if (nowArr.length === N) {
    result.cnt++
    return
  }

  for (let i = 1; i <= N; i++) {
    if (index % i === 0) {
      if (!nowArr.includes(i)) {
        let newArr = Array.from(nowArr)
        newArr.push(i)
        search(index + 1, newArr, N, result)
      }
    } else if (i % index === 0) {
      if (!nowArr.includes(i)) {
        let newArr = Array.from(nowArr)
        newArr.push(i)
        search(index + 1, newArr, N, result)
      }
    }
  }
}

countArrangement(7)