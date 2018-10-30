/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let [totalA, totalB] = [0, 0];
    A.forEach(candy => {
        totalA += candy;
    })
    B.forEach(candy => {
        totalB += candy;
    })

    for (let i = 0; i < A.length; i++) {
        let exchange = (totalA + totalB) / 2 - totalA + A[i];
        if (B.includes(exchange)) {
            return [A[i], exchange];
        }
    }
};