/**
 * Created by Clovin on 07/02/2018.
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 1) {
    digits[0]++
    if (digits[0] > 9) {
      digits[0] -= 10
      digits.unshift(1)
    }
    return digits
  }

  digits[digits.length - 1]++
  if (digits[digits.length - 1] > 9) {
    digits[digits.length - 1] -= 10
    digits[digits.length - 2]++
  }

  for (let i = digits.length - 2; i > 0; i--) {
    if (digits[i] > 9) {
      digits[i] -= 10
      digits[i - 1]++
    }
  }

  if (digits[0] > 9) {
    digits[0] -= 10
    digits.unshift(1)
  }

  return digits
}
