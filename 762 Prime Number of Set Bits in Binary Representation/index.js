/**
 * Created by Clovin on 30/01/2018.
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let prime = [2, 3, 5, 7, 11]
  let result = 0

  for (let i = L; i <= R; i++) {
    let temp = i.toString(2)

    let primeCnt = 0
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === '1') {
        primeCnt++
      }
    }

    let flag = false
    for (let j = 0; j < prime.length; j++) {
      if (prime[j] === primeCnt) {
        result++
        flag = true
        break
      }

      if (prime[j] > primeCnt) {
        flag = true
        break
      }
    }

    if (flag === false) {
      let isPrime = true
      for (let j = 2; j <= Math.sqrt(primeCnt); j++) {
        if (primeCnt % j === 0) {
          isPrime = false
          break
        }
      }

      if (isPrime) {
        prime.push(primeCnt)
        result++
      }
    }
  }

  return result
}
