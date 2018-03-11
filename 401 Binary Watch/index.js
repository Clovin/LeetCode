/**
 * Created by Clovin on 12/03/2018.
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  let result = []

  for (let i = 0; i <= 1024; i++) {
    let temp = i.toString(2)
    let cnt = 0
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === '1') {
        cnt++
      }
    }

    if (cnt === num) {
      let hour = i >> 6
      let min = i % 64
      if (hour < 12 && min < 60) {
        let str = hour + ':'
        if (min < 10) {
          str += '0'
        }
        str += min
        result.push(str)
      }
    }
  }

  return result
}
