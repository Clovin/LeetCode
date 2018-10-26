/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let row = A.length;
    let col = A[0].length;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (i === j || (j < i && i < col && j < row)) {
                continue;
            }
            
            let temp = A[i][j];
            if (j >= A.length) {
                A[j] = [];
            } else {
                A[i][j] = A[j][i];
            }
            A[j][i] = temp;
        }
    }

    A.splice(col);
    for (let i = 0; i < A.length; i++) { 
        A[i].splice(row);
    }

    return A;
};
