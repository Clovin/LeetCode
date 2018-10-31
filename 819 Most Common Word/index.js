/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let map = new Map();
    let tempPara = paragraph.split(/[!\?',;\. ]/);

    for (let i = 0; i < tempPara.length; i++) {
        let temp = tempPara[i].toLowerCase();

        if (banned.includes(temp) || temp === '') {
            continue;
        }

        if (map.has(temp)) {
            map.set(temp, map.get(temp) + 1);
        } else {
            map.set(temp, 1);
        }
    }

    let result = '';
    let len = 0;
    for (let [key, value] of map) {
        if (value > len) {
            len = value;
            result = key;
        }
    }

    return result;
};
