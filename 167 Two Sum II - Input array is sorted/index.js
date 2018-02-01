/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let tempMap = new Map()

  for (let i = 0; i < numbers.length; i++) {
    if (tempMap.has(numbers[i])) {
      return [tempMap.get(numbers[i]) + 1, i + 1]
    }

    tempMap.set(target - numbers[i], i)
  }
}
