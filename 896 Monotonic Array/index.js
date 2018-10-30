/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let flag = 0;
    for (let i = 1; i < A.length - 1; i++) {
        if (flag === 1) {
            if ((A[i - 1] <= A[i] && A[i] <= A[i + 1])) {
                continue;
            }

            return false;
        }

        if (flag === 2) {
            if ((A[i - 1] >= A[i] && A[i] >= A[i + 1])) {
                continue;
            }

            return false;
        }

        if (flag === 0) {
            if (A[i] === A[i - 1]) {
                continue;
            }

            if (A[i] > A[i - 1]) {
                flag = 1;
            }

            if (A[i] < A[i - 1]) {
                flag = 2;
            }

            i--;
        }
    }

    return true;
};
