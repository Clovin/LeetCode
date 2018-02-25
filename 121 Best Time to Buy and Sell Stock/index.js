/**
 * Created by Clovin on 26/02/2018.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0
  let low = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i]
      continue
    }

    if (prices[i] - low > result) {
      result = prices[i] - low
    }
  }

  return result
}
