/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let temp = S.split(' ');

    for (let i = 0; i < temp.length; i++) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(temp[i][0])) {
            temp[i] += 'ma';
        } else {
            temp[i] = temp[i].slice(1) + temp[i][0];
            temp[i] += 'ma';
        }

        for (let j = 0; j <= i; j++) {
            temp[i] += 'a';
        }
    }

    return temp.join(' ');
};
