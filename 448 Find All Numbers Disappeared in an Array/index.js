/**
 * Created by Clovin on 27/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = []

  nums.sort((a, b) => parseInt(a) - parseInt(b))

  let nowNum = 1
  nums.forEach(num => {
    while (nowNum < num) {
      result.push(nowNum++)
    }

    if (nowNum === num) {
      nowNum++
    }
  })

  for (let i = nowNum; i <= nums.length; i++) {
    result.push(i)
  }

  return result
}

console.log(findDisappearedNumbers([3,11,8,16,4,15,4,17,14,14,6,6,2,8,3,12,15,20,20,5]))