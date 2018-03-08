/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = Array.from(nums)
  this.base = Array.from(nums)
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = Array.from(this.base)
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; i++) {
    let temp = this.nums[i]
    let random = i !== 0 ? Math.floor(Math.random() * 1000000) % (i + 1) : 0
    this.nums[i] = this.nums[random]
    this.nums[random] = temp
  }
  return this.nums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
