/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    A.sort((a, b) => {
        if (a % 2 === 0) {
            return -1
        }

        return 1;
    });

    return A
};