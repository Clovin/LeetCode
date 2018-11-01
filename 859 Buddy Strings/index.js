/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let diff = [];

    if (A.length !== B.length || A.length < 2) {
        return false;
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 2 && A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]) {
        return true;
    }

    if (diff.length === 0) {
        let temp = new Set();
        for (let i = 0; i < A.length; i++) {
            if (temp.has(A[i])) {
                return true;
            }

            temp.add(A[i]);
        }
    }

    return false;
};