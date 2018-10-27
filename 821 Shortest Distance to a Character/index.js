/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let result = [];
    let tempS = S.split('');
    let temp = [];
    let chars = '';
    tempS.forEach(char => {
        if (char === C) {
            if (chars !== '') {
                temp.push(chars);
            }

            temp.push(char);

            chars = '';
            return;
        }

        chars += char;
    })

    if (chars !== '') {
        temp.push(chars);
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === C) {
            result.push(0);
            continue;
        }

        if (temp[i].length === 1) {
            result.push(1);
            continue;
        }

        if (temp[i - 1] === C && temp[i + 1] === C) {
            for (let j = 0; j < temp[i].length / 2; j++) {
                result.push(j + 1);
            }

            for (let j = Math.floor(temp[i].length / 2); j > 0; j--) {
                result.push(j);
            }
        } else if (temp[i - 1] === C) {
            for (let j = 0; j < temp[i].length; j++) {
                result.push(j + 1);
            }
        } else {
            for (let j = temp[i].length - 1; j >= 0; j--) {
                result.push(j + 1);
            }
        }
    }

    return result;
};
