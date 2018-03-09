/**
 * Created by Clovin on 10/03/2018.
 */
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  let result = {
    sum: 0
  }
  for (let i = 0; i < needs.length; i++) {
    result.sum += needs[i] * price[i]
  }

  for (let i = 0; i < special.length; i++) {
    for (let j = 0; j < special[i].length - 1; j++) {
      if (special[i][j] > needs[j]) {
        special.splice(i--, 1)
        break
      }
    }
  }

  for (let i = 0; i < special.length; i++) {
    search(0, i, price, special, needs, result)
  }

  return result.sum
}

function search (sum, index, price, special, needs, result) {
  let maxBuy = 99999999
  for (let i = 0; i < price.length; i++) {
    if (special[index][i] === 0) {
      continue
    }

    let temp = Math.floor(needs[i] / special[index][i])
    if (temp < maxBuy) {
      maxBuy = temp
    }
  }

  let newNeeds = Array.from(needs)
  let newSpecial = Array.from(special)
  if (maxBuy !== 0) {
    sum += special[index][price.length] * maxBuy

    for (let i = 0; i < newNeeds.length; i++) {
      newNeeds[i] -= special[index][i] * maxBuy
    }

    for (let i = 0; i < newSpecial.length; i++) {
      for (let j = 0; j < newSpecial[i].length - 1; j++) {
        if (newSpecial[i][j] > newNeeds[j]) {
          newSpecial.splice(i--, 1)
          break
        }
      }
    }
  }

  for (let i = 0; i < newSpecial.length; i++) {
    search(sum, i, price, newSpecial, newNeeds, result)
  }

  if (newSpecial.length === 0) {
    for (let i = 0; i < newNeeds.length; i++) {
      sum += price[i] * newNeeds[i]
    }

    if (sum < result.sum) {
      result.sum = sum
    }
  }
}
