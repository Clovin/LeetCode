/**
 * Created by Clovin on 31/01/2018.
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let candiesSet = new Set()

  for (let i = 0; i < candies.length; i++) {
    candiesSet.add(candies[i])
  }

  return candies.length >= 2 * candiesSet.size ? candiesSet.size : Math.floor(candiesSet.size / 2 + (candies.length - candiesSet.size) / 2)
}
