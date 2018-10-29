/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let set = new Set();
    
    for (let i = 0; i < A.length; i++) {
        let odd = '';
        let even = '';
        for (let j = 0; j < A[i].length; j++) {
            j % 2 === 0 ? even += A[i][j] : odd += A[i][j];
        }

        odd = odd.split('').sort().join('');
        even = even.split('').sort().join('');

        set.add(odd + even);
    }

    return set.size;
};