/**
 * Created by Clovin on 18/02/2018.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0

  if (prices.length === 0) {
    return result
  }

  let temp = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      result += prices[i - 1] - temp
      temp = prices[i]
    }
  }
  result += prices[prices.length - 1] - temp

  return result
}
