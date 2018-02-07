/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) {
    return 0
  }

  if (n === 2) {
    return 0
  }

  if (n === 3) {
    return 1
  }

  if (n <= 5) {
    return 2
  }

  if (n <= 7) {
    return 3
  }

  if (n <= 11) {
    return 4
  }

  let cnt = 4
  for (let i = 11; i < n; i++) {
    let j = 2
    for (; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        break
      }
    }

    if (j > Math.sqrt(i)) {
      cnt++
    }
  }

  return cnt
}
