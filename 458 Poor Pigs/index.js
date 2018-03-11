/**
 * Created by Clovin on 02/03/2018.
 */
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  return Math.ceil(Math.log(buckets) / Math.log(1 + minutesToTest / minutesToDie))
}
