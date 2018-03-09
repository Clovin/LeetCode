/**
 * Created by Clovin on 09/03/2018.
 */
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let cnt = 1
  let clipboard = 1
  let now = 1

  while (now < n) {
    if (n - now - clipboard !== 0 && (n - now - clipboard) % (now + clipboard ) === 0) {
      now += clipboard
      clipboard = now
      cnt += 2
      continue
    }

    cnt++
    now += clipboard
  }

  return n === 1 ? 0 : cnt
}
