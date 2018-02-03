/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let result = []
  let index = 9999

  if (list2.length > list1.length) {
    let temp = list1
    list1 = list2
    list2 = temp
  }

  for (let i = 0; i < list1.length; i++) {
    let index2 = list2.indexOf(list1[i])

    if (index2 !== -1) {
      let temp = index2 + i
      if (temp < index) {
        result = []
        result.push(list1[i])
        index = temp
      } else if (temp === index) {
        result.push(list1[i])
      }
    }
  }

  return result
}
