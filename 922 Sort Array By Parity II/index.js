/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let odd = [];
    let even = [];
    A.forEach(item => {
        if (item % 2 === 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    })

    let result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(i % 2 === 0 ? even.pop() : odd.pop())
    }

    return result;
};