/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    A.sort((a, b) => a - b);
    let max = A[A.length - 1];
    let min = A[0];

    return max - min <= 2 * K ? 0 : max - min - (2 * K);
};