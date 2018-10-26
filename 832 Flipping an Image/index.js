/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    A.forEach(items => {
        items.reverse();

        items.forEach((item, index) => {
            items[index] = item === 1 ? 0 : 1;
        })
    })

    return A;
};
