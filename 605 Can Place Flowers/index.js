/**
 * Created by Clovin on 04/03/2018.
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let cnt = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (i - 1 < 0) {
        if (flowerbed[i + 1] !== 1) {
          cnt++
          flowerbed[i] = 1
        }
        continue
      }

      if (i + 1 === flowerbed.length) {
        if (flowerbed[i - 1] !== 1) {
          cnt++
          flowerbed[i] = 1
        }
        continue
      }

      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        cnt++
        flowerbed[i] = 1
      }
    }
  }

  return cnt >= n
}
