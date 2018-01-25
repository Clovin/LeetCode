/**
 * Created by Clovin on 26/01/2018.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first, second, third;
  first = nums[0];
  second = third = Number.MIN_SAFE_INTEGER;
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
      count++;
    } else if (first > nums[i] && nums[i] > second) {
      third = second;
      second = nums[i];
      count++;
    } else if (second > nums[i] && nums[i] > third) {
      third = nums[i];
      count++;
    }
  }
  return count >= 2 ? third : first;
}