/**
 * Created by Clovin on 08/02/2018.
 */
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) {
      return 1
    }

    let start = 1
    let end = n
    while (1) {
      if (start - end === 1) {
        return end
      }

      let now = Math.floor((start + end) / 2)

      if (isBadVersion(now)) {
        if (isBadVersion(now - 1)) {
          end = now - 1
        } else {
          return now
        }
      } else {
        if (isBadVersion(now + 1)) {
          return now + 1
        } else {
          start = now + 1
        }
      }
    }
  }
}
