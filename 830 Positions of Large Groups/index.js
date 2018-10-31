/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let start = 0;
    let end = 0;
    let result = [];
    for (let i = 1; i < S.length; i++) {
        if (S[i] !== S[i - 1]) {
            if (end - start + 1 >= 3) {
                result.push([start, end]);
            }

            start = i;
            end = i;
            continue;
        }

        end++;
    }

    if (end - start + 1 >= 3) {
        result.push([start, end]);
    }

    return result;
};