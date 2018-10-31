/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.kth = k;
    this.array = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    var insertIndex = binaryInsert(this.array, 0, this.array.length - 1, val);
    this.array.splice(insertIndex, 0, val);
    return this.array[this.array.length - this.kth];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

function binaryInsert(array, left, right, value) {
    if (left === right) {
        return (value <= array[left]) ? left : left + 1;
    } else if (left === right - 1) {
        if (value <= array[left]) {
            return left;
        } else if (value > array[right]) {
            return right + 1;
        } else {
            return right;
        }
    }

    if (value <= array[left]) {
        return left;
    } else if (value >= array[right]) {
        return right + 1;
    } else {
        var middle = Math.floor((left + right) / 2);
        var midValue = array[middle];
        var minusValue = array[middle - 1];
        var plusValue = array[middle + 1];
        if (value === midValue) {
            return middle;
        } else if (minusValue < value && value < midValue) {
            return middle;
        } else if (midValue < value && value < plusValue) {
            return middle + 1;
        } else if (value < midValue) {
            return binaryInsert(array, left + 1, middle - 1, value);
        } else if (value > midValue) {
            return binaryInsert(array, middle + 1, right - 1, value);
        }
    }
}