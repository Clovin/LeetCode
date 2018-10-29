/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let map = new Map();

    let words = A.split(' ');
    words.forEach(word => {
        if (map.has(word)) {
            map.set(word, 2);
        } else {
            map.set(word, 1)
        }
    })

    words = B.split(' ');
    words.forEach(word => {
        if (map.has(word)) {
            map.set(word, 2);
        } else {
            map.set(word, 1)
        }
    })

    let result = [];
    for (const [key, value] of map) {
        if (value === 1) {
            result.push(key);
        }
    }

    return result;
};